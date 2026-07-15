import { NextResponse } from "next/server";
import { auth } from "../../../lib/auth";
import { google } from "googleapis";

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.accessToken) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const body = await request.json();
  const { title, description, start, end, calendarId = "primary" } = body;

  if (!title || !start || !end) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );

  oauth2Client.setCredentials({ access_token: session.accessToken });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const existingEvents = await calendar.events.list({
    calendarId,
    timeMin: start,
    timeMax: end,
    maxResults: 20,
    singleEvents: true,
    orderBy: "startTime",
  });

  const hasOverlap = (existingEvents.data.items ?? []).some((event) => {
    const eventStart = event.start?.dateTime;
    const eventEnd = event.end?.dateTime;

    if (!eventStart || !eventEnd) {
      return false;
    }

    return eventStart < end && eventEnd > start;
  });

  if (hasOverlap) {
    return NextResponse.json({ error: "The selected slot is already booked" }, { status: 409 });
  }

  const event = await calendar.events.insert({
    calendarId,
    requestBody: {
      summary: title,
      description,
      start: { dateTime: start, timeZone: "America/Mexico_City" },
      end: { dateTime: end, timeZone: "America/Mexico_City" },
      transparency: "opaque",
      visibility: "private",
    },
  });

  return NextResponse.json({ success: true, eventId: event.data.id });
}
