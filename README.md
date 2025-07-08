# ✨ Astro + Sanity Monorepo (SSG-only)

Dieses Projekt ist ein **strukturierter Monorepo-Ansatz** für statisches Hosting mit [Astro](https://astro.build) und [Sanity Studio](https://www.sanity.io/), sauber getrennt in zwei eigenständige Applikationen:

- `astro/`: Frontend (SSG)
- `sanity/`: CMS-Backend (Studio)

---

## 📁 Struktur

```text
/
├── astro/         → Astro-Website mit statischer Generierung
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   └── shared/api/sanityClient.ts
│   └── astro.config.mjs
│
├── sanity/        → Sanity Studio (optional eigenständig hostbar)
│   ├── schemas/
│   └── sanity.config.ts
│
├── package.json   → Root mit Workspaces-Definition
```

---

## 📦 Setup

### 1. Installation (Monorepo)

```bash
npm install
```

### 2. Astro Dev-Server starten (nur statisch)

```bash
cd astro
npm run dev
```

### 3. Sanity Studio lokal starten

```bash
cd sanity
npm run dev
```

---

## 🌐 Deployment-Strategie

| Teil     | Hosting                                 | Bemerkung                 |
| -------- | --------------------------------------- | ------------------------- |
| `astro`  | z. B. Vercel, Netlify, Cloudflare Pages | 100 % statisches HTML     |
| `sanity` | z. B. Sanity.io, Render, Railway        | Studio getrennt deploybar |

---

## 🔧 Technologien

- **Astro** – moderne statische Site-Generierung
- **Sanity** – Headless CMS
- **@sanity/client** – manuell konfigurierter, leichter Datenzugriff
- **React** – eingebunden über `@astrojs/react`
- **FSD (Feature-Sliced Design)** – modularer Aufbau

---

## 🔐 Sicherheitshinweis

Es existieren `npm audit`-Warnungen in Abhängigkeiten von Astro (SSR-bezogen) und Sanity Studio (Editor-Komponenten).

- Der **Astro-Build ist vollständig statisch**, kein SSR → **nicht betroffen**
- Das **Studio läuft lokal oder geschützt extern** → **kein öffentliches Sicherheitsrisiko**

---

## 📘 Dokumentation

- [Astro Docs](https://docs.astro.build)
- [Sanity Docs](https://www.sanity.io/docs)
- [@sanity/client API](https://www.sanity.io/docs/js-client)
