---
title: CLAUDE.md - AeroPython AI Memory File
tags:
  - project
  - claude-md
  - aeropython
status: ready-to-use
date: 2026-04-12
---

# CLAUDE.md — Copy This Into Your Project Root

> [!tip] Usage
> Copy the content below (everything inside the code block) into a file called `CLAUDE.md` at the root of your AeroPython project. This gives Claude Code persistent memory about your project.

````markdown
# AEROPYTHON

## Project Overview
AeroPython is a web-based RPG adventure game that teaches Python to total beginners. Players write real Python code in a Monaco editor to solve quests, defeat monsters, and progress through an 8-region world map. Code executes via Pyodide (WebAssembly) entirely in the browser — no backend needed.

## Tech Stack
- Framework: Next.js 14 (App Router, TypeScript)
- Styling: Tailwind CSS + shadcn/ui
- Code Editor: Monaco Editor (@monaco-editor/react)
- Python Execution: Pyodide via Web Worker (CDN-loaded)
- Database: LocalStorage (V1), Supabase (V2)
- Deployment: Vercel

## Architecture Rules
- All pages in /app directory (Next.js App Router)
- Components in /components, organized: /ui, /game, /editor
- Game data in /public/data/challenges.json (static, loaded at build)
- Pyodide runs ONLY in Web Worker (/public/pyodide-worker.js) — never on main thread
- TypeScript interfaces in /types/game.ts (single source of truth)
- Game state via React Context + useReducer in /lib/game-state.ts
- Save/load via LocalStorage in /lib/storage.ts

## Code Style
- TypeScript strict mode for all files
- Functional components only, no class components
- async/await, never raw promises
- Every function needs try/catch error handling
- File names: kebab-case (code-editor.tsx)
- Component names: PascalCase (CodeEditor)
- Files under 200 lines — split if longer

## Build & Test Commands
- Dev server: npm run dev
- Build: npm run build
- Lint: npm run lint

## Important Constraints
- Do NOT modify working features when adding new ones
- Run dev server after changes to verify nothing broke
- Ask before installing new dependencies
- Pyodide code execution MUST have 5-second timeout (prevent infinite loops)
- All error messages shown to player must be friendly (no raw stack traces)
- Keep all text hardcoded for V1 (no i18n)
- Desktop-first layout (no mobile optimization in V1)

## Current Status
- Phase: Not Started
- Completed: []
- In Progress: Planning
- Blocked: None
````
