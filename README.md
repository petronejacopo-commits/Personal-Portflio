# Procione Portfolio

Portfolio personale di Jacopo Petrone, Game Designer & UX/UI Specialist.
Costruito con un'architettura moderna, veloce e ricca di animazioni interattive.

## 🛠️ Stack Tecnologico
- **Framework:** Next.js 16 (App Router)
- **Linguaggio:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animazioni:** GSAP (ScrollTrigger, Parallax), Framer Motion, Anime.js
- **3D & WebGL:** React Three Fiber / Drei
- **CMS:** Payload CMS 3.x (SQLite Adapter, Lexical Editor)
- **Auth:** JWT (Jose) per custom edge middleware

## 🎨 Palette Colori
- Sfondo Principale (Nero): `#0D0D0D`
- Grigio Primario (Sfondi Card): `#1A1A1A`
- Grigio Secondario (Bordi): `#262626`
- Ambra (Accento Primario): `#D4A843`
- Terracotta (Accento Secondario): `#B87351`
- Bronzo: `#8B6B4A`
- Testo Chiaro: `#F5F0E8`
- Testo Secondario: `#A09888`

## 🚀 Setup Locale

1. Installa le dipendenze:
   ```bash
   npm install
   ```

2. Configura le variabili d'ambiente creando un file `.env.local`:
   ```env
   PAYLOAD_SECRET=your-secret
   DATABASE_URI=file:./payload.db
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ADMIN_JWT_SECRET=your-jwt-secret
   ADMIN_USERNAME=procione19
   ADMIN_PASSWORD=Chiapodalo06!
   ```

3. Avvia l'ambiente di sviluppo:
   ```bash
   npm run dev
   ```

## 🔒 Accesso Admin
Per gestire i messaggi e il CMS, accedi alla pagina di login dedicata:
- **URL:** `/auth-admin/login`
- **Username:** `procione19`
- **Password:** `Chiapodalo06!` (modificabile in `.env`)

Il sistema utilizza un middleware Edge basato su JWT per proteggere in sicurezza tutte le route sotto `/auth-admin`.

## 🌐 Deploy su Vercel
Il progetto è configurato per il deploy one-click su Vercel tramite il file `vercel.json`.
1. Collega il repository a Vercel.
2. Assicurati che il framework predefinito sia impostato su `Next.js`.
3. Inserisci le Environment Variables presenti in `.env.production`.
4. Effettua il Deploy.