# SPA Experiment – React + Vite

A simple Single Page Application demonstrating client‑side routing, component composition, and fast development with Vite.

## Objective
Design and develop a basic SPA using a modern framework, practice client‑side routing, and understand CSR (client‑side rendering) trade‑offs.

## Tech Stack
- React 19
- React Router DOM
- Vite 7
- JavaScript (ES202x)
- HTML5, CSS3
- Optional: Netlify (deployment) and GitHub (version control)

## Project Structure
- `src/pages/Home.jsx` – Home page
- `src/pages/About.jsx` – About page
- `src/pages/Contact.jsx` – Contact page
- `src/pages/Spa.jsx` – SPA demo page
- `src/main.jsx` – App bootstrap
- `src/App.jsx` – Routes and layout
- `index.html` – Vite HTML entry

## Getting Started
1) Install dependencies
- npm install

2) Run locally (dev server with HMR)
- npm run dev

3) Build for production
- npm run build

4) Preview the production build
- npm run preview

## Features
- SPA architecture with client‑side routing (no full page reloads)
- Component‑based UI with reusable React components
- Fast HMR and optimized builds via Vite
- Responsive, accessible base styles

## Deployment
You can deploy the `dist/` build to any static host. Example steps for Netlify:
- Run: npm run build
- Drag‑and‑drop the `dist/` folder into Netlify, or connect the repo and set build command to `vite build` and publish directory to `dist`

Live URL (if deployed): add your link here.

## Learning Outcomes
By completing this experiment, you will be able to:
- Explain SPA vs MPA and CSR vs SSR/SSG trade‑offs (routing, performance, SEO)
- Set up a React + Vite project and manage scripts for dev, build, and preview
- Build pages as React components and compose them effectively
- Configure and use client‑side routing with React Router
- Handle navigation state without page reloads
- Organize a clean folder structure for a small SPA
- Apply basic accessibility and responsive layout considerations
- Prepare a production build and deploy to a static host (e.g., Netlify)
- Use Git/GitHub for version control and documentation hygiene

## Notes
- ESLint is configured; run `npm run lint` to analyze code quality.
- Update the Live URL once deployed.
