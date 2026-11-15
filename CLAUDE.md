# Hearthlore Corporate Website Development Guide

## 1. Project Overview
* **Company**: Hearthlore (Game Development Studio)
* **Goal**: Build the official corporate website and game portfolio showcase using Next.js.
* **Core References**:
  * **Design System**: Strictly follow `./DESIGN.md` for typography, color palette, spacing, and UI components.
  * **Game & Dev Vault**: Extract company info, project history, and game assets/lore from `/Users/joelchoi/Projects/games/paper-seasons-unity/vault`.

## 2. Tech Stack & Architecture
* **Framework**: Next.js (App Router, TypeScript)
* **Styling**: Tailwind CSS (configured to match `./DESIGN.md` tokens)
* **Animations**: Framer Motion (subtle, cozy, and tactile transitions matching the studio's vibe)
* **Icons**: Lucide React
* **Package Manager**: `npm` (or `pnpm` if lockfile exists)

## 3. Data Sourcing Rules (`/Users/joelchoi/Projects/games/paper-seasons-unity/vault`)
Before writing copy or building pages, inspect the Obsidian/Markdown vault at `/Users/joelchoi/Projects/games/paper-seasons-unity/vault`.
* **Extract**:
  * Studio vision, mission, and team/company profile for **Hearthlore**.
  * Development logs, milestones, world-building lore, and feature lists for **Paper Seasons** (and any other projects found in the vault).
* **Security & Privacy**:
  * **DO NOT** expose internal API keys, private credentials, unfinished internal TODOs, or sensitive developer notes on the public website.
  * Curate and polish raw dev notes into professional, player-facing copy.
* **Asset Handling**: If usable concept art, screenshots, or logos exist in the vault, copy them to `public/images/` rather than referencing external absolute paths.

## 4. Design System Enforcement (`./DESIGN.md`)
* Read `./DESIGN.md` completely before scaffolding UI components.
* Map all design tokens (colors, fonts, border radii, shadows) into `tailwind.config.ts` and `app/globals.css`.
* Ensure responsive design across mobile, tablet, and desktop viewports.

## 5. Recommended Page Structure
* `/` (**Home**): Hero section featuring Hearthlore's identity, featured game spotlight (*Paper Seasons*), and latest dev highlights.
* `/about` (**Studio**): Hearthlore's philosophy, story, and team culture.
* `/games` & `/games/[slug]` (**Games**): Detailed showcase of *Paper Seasons* (lore, gameplay mechanics, media gallery, dev progress).
* `/devlog` (**Devlog**): Curated development milestones and updates synthesized from the vault.
* `/contact` (**Contact / Press**): Business inquiries, press kit download placeholder, and social links.

## 6. Coding Conventions & Workflow
* **Component Structure**: Keep components modular under `src/components/` (`ui/`, `layout/`, `sections/`).
* **Verification**: Always run `npm run build` and `npm run lint` after major changes to ensure zero TypeScript or build errors.
* **Step-by-Step Execution**:
  1. Read `./DESIGN.md` and scan `/Users/joelchoi/Projects/games/paper-seasons-unity/vault`.
  2. Summarize findings and propose a content/page plan before generating full pages.
  3. Initialize/configure Next.js & Tailwind tokens.
  4. Build layout, core pages, and populate with curated vault content.

