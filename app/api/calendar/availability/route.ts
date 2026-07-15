import { NextResponse } from "next/server";
import { auth } from "../../../../lib/auth";
import { google } from "googleapis";

export async function GET(request: Request) {
  const session = await auth();

  if (!session?.accessToken) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const timeMin = searchParams.get("timeMin");
  const timeMax = searchParams.get("timeMax");
  const calendarId = searchParams.get("calendarId") ?? "primary";

  if (!timeMin || !timeMax) {
    return NextResponse.json({ error: "Missing time range" }, { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );

  oauth2Client.setCredentials({ access_token: session.accessToken });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const response = await calendar.events.list({
    calendarId,
    timeMin,
    timeMax,
    maxResults: 50,
    singleEvents: true,
    orderBy: "startTime",
  });

  const busySlots = (response.data.items ?? []).map((event) => ({
    start: event.start?.dateTime,
    end: event.end?.dateTime,
  }));

  return NextResponse.json({ busySlots });
}
