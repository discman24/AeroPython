---
title: Lessons Learned - AeroPython
tags:
  - project
  - lessons
  - aeropython
date: 2026-04-12
---

# Lessons Learned — AeroPython

> [!info] Purpose
> Update this file after every correction or insight. Prevents repeating mistakes.

## Planning Phase (2026-04-12)

- **Pyodide is the critical path.** Always validate the hardest technical dependency first before building features on top of it. If the foundation is broken, everything built on it is wasted.
- **70% success rate is the sweet spot** for educational game challenges. Easier = boring. Harder = frustrating. Research-backed.
- **Fresh sessions per phase.** Context pollution causes AI coding tools to degrade after 30-40 minutes. Start clean for each phase.

## Build Phase (2026-04-12)

- **React Rules of Hooks: NEVER put hooks after a conditional return.** All `useState`, `useEffect`, `useCallback`, and custom hooks MUST be called before any `if (...) return`. React tracks hooks by call order — skipping one crashes the entire component silently (blank screen, no error in UI). This caused RPG mode to show a blank screen when toggled.
- **When adding a new "mode" to an existing React component,** put the conditional render AFTER all hooks, never before. Pattern: all useState → all useEffect → all custom hooks → THEN `if (mode === 'x') return <OtherComponent />`.
- **Build on what exists.** The project already had Vite + React + Pyodide working. Switching to Next.js would have wasted days. Adapt the plan to the reality, not the other way around.
