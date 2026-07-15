# Barberbook Web

## Integración con Google Calendar

1. Copia el archivo .env.local.example a .env.local y completa tus credenciales de Google.
2. Crea un proyecto en Google Cloud Console y habilita la API de Google Calendar.
3. Añade la URI de redirección de NextAuth: http://localhost:3000/api/auth/callback/google
4. Inicia el proyecto con npm run dev.

### Variables de entorno requeridas

- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- NEXTAUTH_SECRET
- NEXTAUTH_URL

### Qué se implementó

- Autenticación con NextAuth y Google OAuth.
- Ruta de autenticación en /api/auth/[...nextauth].
- Endpoint para crear eventos en Google Calendar desde la reserva.
- Endpoint para consultar disponibilidad del calendario y evitar duplicados.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
