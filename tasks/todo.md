---
title: AeroPython - Master Work Plan
tags:
  - project
  - plan
  - aeropython
status: active
date: 2026-04-12
---

# AeroPython - Master Work Plan

> [!tip] Product Definition
> **AeroPython** is a web-based RPG adventure game that teaches Python programming to total beginners by letting them write real Python code to control a hero character, solve quests, and battle coding monsters. Unlike Codecademy (boring drills) or CodeCombat (plateaus fast), AeroPython combines tight narrative coupling with real browser-based code execution — your code literally changes the story.

---

## V1 MVP Features (Launch With These)

- [ ] **Real Python Code Editor** — Monaco editor with syntax highlighting, auto-complete, and instant Pyodide execution in a Web Worker. This IS the game.
- [ ] **RPG Overworld Map** — Visual world map showing regions (each = a Python topic). Locked regions unlock as you level up. Clear sense of progression.
- [ ] **Quest/Challenge System** — 40-50 coding challenges across 8 Python topics. Each quest has narrative context, guided instructions, expected output, and hint system.
- [ ] **Character & XP System** — Player creates a hero. XP awarded for completing challenges. Leveling unlocks new regions/abilities. Simple stats (HP, Mana = code accuracy).
- [ ] **Story Engine** — Dialogue boxes with character art. Story beats between challenges. Hero's Journey framework: discover powers → face trials → master coding → defeat final boss.
- [ ] **Instant Feedback Console** — Output panel shows code results, error messages (translated to friendly language), and success/failure animations.
- [ ] **Progress Persistence** — LocalStorage saves progress (no auth needed for V1). Player can continue where they left off.

## V2 Parking Lot (Build Later)

- User accounts & cloud saves (requires auth — skip for V1)
- Leaderboards & social features (requires backend — skip)
- Daily streak system with spaced repetition review
- Multiplayer coding duels
- Achievement/badge system
- Mobile responsive layout (desktop-first for V1)
- Advanced topics: APIs, file I/O, libraries
- Custom character art/skins
- Sound effects & music

## Complexity Rating

> [!warning] Moderate-Complex (5-8 sessions)
> This is NOT a weekend project. The code editor + Pyodide integration is the hard part. But with phased execution, each session is manageable. Estimated total: **15-25 hours of focused building**.

---

## Tech Stack

| Component | Choice | Why |
|-----------|--------|-----|
| Framework | **Next.js 14 (App Router)** | Best AI-coding support, great DX, easy deployment |
| Styling | **Tailwind CSS + shadcn/ui** | Fast to build, consistent, great component library |
| Code Editor | **Monaco Editor** (via `@monaco-editor/react`) | Same editor as VS Code — syntax highlighting, autocomplete |
| Python Execution | **Pyodide** (via Web Worker) | Real CPython in browser via WASM. No server needed |
| Database | **LocalStorage** (V1) → Supabase (V2) | Zero setup for V1. Upgrade path when ready |
| State Management | **React Context + useReducer** | Simple, no extra deps. Zustand if complexity grows |
| Deployment | **Vercel** (free tier) | One-click deploy for Next.js |
| Package Manager | **npm** | Fewest issues for beginners |

---

## Python Curriculum Map (8 Regions)

### Region 1: The Village of Variables (Levels 1-5)
- `print()` statements — "Cast your first spell"
- Variables & assignment — "Name your weapons"  
- Data types: int, str, float, bool — "Identify magical elements"
- String concatenation — "Combine spell components"
- Input basics — "Listen to the village elder"

### Region 2: The Arithmetic Arena (Levels 6-10)
- Math operators (+, -, *, /, //, %, **) — "Calculate battle damage"
- Order of operations — "Chain spell combos correctly"
- Type conversion (int(), str(), float()) — "Transform materials"
- f-strings — "Inscribe scrolls with dynamic text"
- Comparison operators — "Evaluate enemy strength"

### Region 3: The Crossroads of Conditions (Levels 11-15)
- if statements — "Choose your path"
- if/else — "Fight or flee decisions"
- if/elif/else — "Multiple branching quests"
- Logical operators (and, or, not) — "Complex battle conditions"
- Nested conditionals — "The labyrinth of choices"

### Region 4: The Loop Caverns (Levels 16-20)
- for loops with range() — "Repeat attacks"
- while loops — "Guard the gate until dawn"
- Loop with strings — "Decode the ancient cipher"
- break and continue — "Escape the dungeon / skip traps"
- Nested loops — "Search the treasure grid"

### Region 5: The Function Forge (Levels 21-25)
- Defining functions — "Create your own spells"
- Parameters and arguments — "Power up your spells"
- Return values — "Harvest spell results"
- Default parameters — "Set spell defaults"
- Multiple functions working together — "Build spell combos"

### Region 6: The List Labyrinth (Levels 26-30)
- Creating lists — "Build your inventory"
- Indexing and slicing — "Select items from chest"
- List methods (append, remove, sort) — "Manage your gear"
- List comprehensions — "Mass-craft potions"
- Iterating over lists — "Inspect all loot"

### Region 7: The Dictionary Dungeon (Levels 31-35)
- Creating dictionaries — "The monster encyclopedia"
- Accessing and modifying — "Update bestiary entries"
- Looping through dicts — "Scan all monster stats"
- Nested dictionaries — "The guild registry"
- Dict methods — "Advanced record keeping"

### Region 8: The Tower of Classes (Levels 36-40)
- Classes and objects — "Create hero archetypes"
- __init__ and self — "Initialize your hero"
- Methods — "Hero abilities"
- Inheritance — "Evolve your character class"
- **Final Boss Battle** — Combine everything learned

---

## Architecture & File Structure

```
aeropython/
├── CLAUDE.md                        # AI memory file
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local                       # (empty for V1, no secrets needed)
├── public/
│   ├── pyodide-worker.js           # Web Worker for Pyodide execution
│   ├── images/
│   │   ├── map/                    # World map region images
│   │   ├── characters/             # Character art (simple SVGs)
│   │   └── ui/                     # UI elements, icons
│   └── data/
│       └── challenges.json         # All 40-50 challenges data
├── app/
│   ├── layout.tsx                  # Root layout (game chrome, nav)
│   ├── page.tsx                    # Title screen / start game
│   ├── map/
│   │   └── page.tsx               # World map (region selection)
│   ├── quest/
│   │   └── [id]/
│   │       └── page.tsx           # Individual quest/challenge page
│   ├── character/
│   │   └── page.tsx               # Character stats, inventory
│   └── api/                        # (empty for V1, placeholder for V2)
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── game/
│   │   ├── WorldMap.tsx           # Interactive region map
│   │   ├── QuestCard.tsx          # Quest selection card
│   │   ├── DialogueBox.tsx        # Story dialogue display
│   │   ├── CharacterPanel.tsx     # Hero stats sidebar
│   │   └── XPBar.tsx             # Experience progress bar
│   └── editor/
│       ├── CodeEditor.tsx         # Monaco editor wrapper
│       ├── OutputConsole.tsx      # Code output display
│       ├── HintSystem.tsx         # Progressive hint reveal
│       └── ChallengePrompt.tsx    # Quest description + instructions
├── lib/
│   ├── pyodide.ts                 # Pyodide Web Worker manager
│   ├── game-state.ts              # Game state context + reducer
│   ├── challenges.ts              # Challenge loader + validator
│   ├── xp-calculator.ts           # XP/leveling math
│   └── storage.ts                 # LocalStorage save/load
└── types/
    └── game.ts                    # TypeScript interfaces
```

---

## Implementation Phases

### Phase A: Project Setup & Foundation (15 min)
- [ ] `npx create-next-app@latest aeropython --typescript --tailwind --app`
- [ ] Install deps: `@monaco-editor/react`, `shadcn/ui`
- [ ] Create folder structure (empty files OK)
- [ ] Create CLAUDE.md in project root
- [ ] Verify `npm run dev` works

> [!success] Test
> Browser shows Next.js default page at localhost:3000

### Phase B: Pyodide Integration (45 min) ⚠️ CRITICAL
- [ ] Create `pyodide-worker.js` Web Worker
- [ ] Build `lib/pyodide.ts` wrapper (init, run code, capture output, handle errors)
- [ ] Create basic CodeEditor component with Monaco
- [ ] Create OutputConsole component
- [ ] Test: user types Python → clicks Run → sees output

> [!success] Test
> Type `print("Hello Caveman")` → see "Hello Caveman" in output console. No page freeze during execution.

> [!danger] Critical Path
> This is the riskiest phase. If Pyodide doesn't work in the Next.js build, everything downstream fails. Solve this FIRST before building any game features.

### Phase C: Game State & Data Model (30 min)
- [ ] Define TypeScript interfaces in `types/game.ts` (Player, Challenge, Region, Quest)
- [ ] Build `lib/game-state.ts` (React Context + useReducer)
- [ ] Build `lib/storage.ts` (save/load to LocalStorage)
- [ ] Create `challenges.json` with 5 test challenges
- [ ] Build `lib/challenges.ts` (load, validate, check answers)

> [!success] Test
> Game state persists across browser refresh. Challenge data loads correctly.

### Phase D: Core Game UI Layout (30 min)
- [ ] Build root layout with game-themed nav
- [ ] Create title screen (`app/page.tsx`) with "New Game" / "Continue"
- [ ] Build WorldMap component with 8 clickable regions (most locked)
- [ ] Build character panel sidebar (name, level, XP bar)
- [ ] Wire up routing: title → map → quest

> [!success] Test
> Can navigate from title → world map → click Region 1 → see quest list. Character panel shows on all game pages.

### Phase E: Quest/Challenge Page — The Core Loop (45 min)
- [ ] Build quest page layout: story panel (left) + code editor (right)
- [ ] Wire ChallengePrompt component (quest description, instructions, expected output)
- [ ] Connect CodeEditor → Pyodide → OutputConsole pipeline
- [ ] Build answer validation (compare output to expected)
- [ ] Add success/failure animations and XP award
- [ ] Build HintSystem (reveal hints progressively)

> [!success] Test
> Complete a full challenge: read quest → write code → run → see output → get "Success!" + XP. Hints work. Wrong answers show friendly error.

### Phase F: Story Engine & Dialogue (30 min)
- [ ] Build DialogueBox component (character portrait + text + advance button)
- [ ] Create story data for Region 1 (intro, between challenges, boss)
- [ ] Wire story triggers: before first quest, after completion, region clear
- [ ] Add character name input at game start

> [!success] Test
> Start new game → see intro dialogue → complete quest → see story progression → clear region → see celebration dialogue.

### Phase G: Full Challenge Content (60 min)
- [ ] Write all 40-50 challenges across 8 regions in `challenges.json`
- [ ] Each challenge: title, story text, instructions, starter code, expected output, hints (3 levels), XP reward
- [ ] Region difficulty scaling: Region 1 = guided, Region 8 = minimal scaffolding
- [ ] Add boss challenges (harder, multi-concept) at end of each region

> [!success] Test
> Play through Region 1-3 continuously. Difficulty feels right. No broken challenges. All outputs validate correctly.

### Phase H: Polish & Deploy (30 min)
- [ ] Visual polish: consistent spacing, hover states, animations
- [ ] Error states: friendly messages for all failure modes
- [ ] Loading state for Pyodide initialization (progress bar)
- [ ] Mobile warning banner ("Best on desktop")
- [ ] Deploy to Vercel
- [ ] Test production URL end-to-end

> [!success] Test
> App is live. Full playthrough from Region 1-3 works on production URL. Code editor executes Python correctly.

---

## Execution Prompts

> [!info]- Phase A Setup Prompt (Copy-Paste to Claude Code)
> I'm building AeroPython, an RPG adventure web game that teaches Python programming. Players write real Python code in a Monaco editor, which executes via Pyodide (WASM) in the browser. It's a Next.js 14 app with Tailwind and shadcn/ui.
> 
> Read the CLAUDE.md file first, then:
> 1. Run `npx create-next-app@latest aeropython --typescript --tailwind --app --src-dir=false`
> 2. Install: `npm install @monaco-editor/react`
> 3. Set up shadcn/ui: `npx shadcn-ui@latest init`
> 4. Create the full folder structure (empty files are fine)
> 5. Create CLAUDE.md in root with the project context
> 6. Verify `npm run dev` works
> 
> Do NOT build any features yet. Only project scaffolding.

> [!info]- Phase B Pyodide Prompt (Copy-Paste to Claude Code)
> I'm continuing work on AeroPython. Phase A (project setup) is complete.
> 
> This phase: Integrate Pyodide for browser-based Python execution.
> 
> Tasks:
> 1. Create `public/pyodide-worker.js` — a Web Worker that loads Pyodide, receives code strings via postMessage, executes them, and returns stdout/stderr
> 2. Create `lib/pyodide.ts` — TypeScript wrapper: initWorker(), runCode(code: string): Promise<{output: string, error: string}>, with timeout handling (5 second max)
> 3. Create `components/editor/CodeEditor.tsx` — Monaco editor wrapper with Python syntax, dark theme, line numbers
> 4. Create `components/editor/OutputConsole.tsx` — displays output or errors with friendly formatting
> 5. Create a test page at `app/test/page.tsx` that combines editor + run button + output
> 
> CRITICAL: Pyodide loads from CDN (https://cdn.jsdelivr.net/pyodide/v0.27.0/full/). The Web Worker must handle: loading state, execution, stdout capture, stderr capture, and timeout for infinite loops.
> 
> Test: Type `print("Hello")` → click Run → see "Hello" in output. No page freeze.

> [!info]- Recovery Prompt (Use When Something Breaks)
> Something broke. Here's what happened:
> 
> Error: [paste error]
> What I was doing: [describe task]
> What was working: [describe what worked]
> 
> Fix this specific error without changing anything else that's currently working. Explain what went wrong before making changes.

---

## Key Architecture Decisions

1. **Pyodide over server-side execution** — No backend needed for V1. Code runs entirely in browser. Eliminates hosting costs and latency.
2. **Web Worker for Pyodide** — Prevents UI freezing during code execution. Non-negotiable.
3. **LocalStorage over database** — Zero auth complexity for V1. Player progress saves locally. Clear upgrade path to Supabase when ready.
4. **challenges.json as static data** — All game content in one JSON file. Easy to edit, no CMS needed. Load at build time.
5. **Monaco over CodeMirror** — Better autocomplete, same editor as VS Code (familiar), excellent React wrapper available.

---

## Review Checklist

- [ ] All phases have clear test criteria
- [ ] Phase B (Pyodide) is identified as critical path
- [ ] No phase depends on external services or API keys
- [ ] Tech stack is beginner-friendly (no exotic tools)
- [ ] V1 scope is achievable in 5-8 sessions
- [ ] V2 features are clearly separated
