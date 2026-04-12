---
title: Deploy AeroPython - Caveman Guide
tags:
  - guide
  - deploy
  - aeropython
date: 2026-04-12
---

# Deploy AeroPython — Caveman's 5-Minute Guide

> [!tip] What This Does
> Gets your game on the internet so anyone with the link can play it. Free forever. No credit card needed.

---

## Step 0: Install Node.js (skip if you already have it)

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (big green button)
3. Install it (just click Next through everything)
4. Open **Terminal** (Mac) or **Command Prompt** (Windows)
5. Type `node --version` and press Enter — you should see a version number

---

## Step 1: Open Your Project in Terminal

**Mac:**
1. Open **Terminal** (search "Terminal" in Spotlight)
2. Type `cd ` (with a space after it)
3. Drag your `aeropython` folder from Finder into the Terminal window
4. Press Enter

**Windows:**
1. Open your `aeropython` folder in File Explorer
2. Click the address bar at the top
3. Type `cmd` and press Enter — a black window opens in the right folder

---

## Step 2: Install & Run Locally (test it first!)

Type these commands one at a time, pressing Enter after each:

```bash
npm install
npm run dev
```

You'll see something like:
```
Local: http://localhost:5173/
```

Open that link in your browser. Your game is running! Click **RPG Mode** in the header to play.

Press `Ctrl+C` in the terminal to stop the server when you're done testing.

---

## Step 3: Push to GitHub

1. Go to [https://github.com/new](https://github.com/new)
2. Name it `aeropython`
3. Keep it **Public**
4. Do NOT check any boxes (no README, no gitignore — we already have these)
5. Click **Create repository**
6. GitHub shows you commands. Run these in your terminal:

```bash
git init
git add .
git commit -m "AeroPython RPG - learn Python by playing"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aeropython.git
git push -u origin main
```

> [!warning] Replace YOUR-USERNAME
> Replace `YOUR-USERNAME` with your actual GitHub username (e.g., `discman24`)

---

## Step 4: Deploy to Vercel (the magic part)

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel to access your GitHub
4. Click **Add New Project**
5. Find `aeropython` in your repo list → click **Import**
6. Leave all settings as default (Vercel auto-detects Vite)
7. Click **Deploy**
8. Wait ~60 seconds...
9. You get a URL like: `https://aeropython-xyz.vercel.app`

**That's it. Your game is live. Share that link with anyone.**

---

## Step 5: Share With Other Cavemen

Just send them the Vercel URL. They click it, the game loads, they play. No install needed.

---

## Optional: Custom Domain

If you want `aeropython.com` or similar:
1. Buy a domain on [Namecheap](https://namecheap.com) (~$10/year)
2. In Vercel dashboard → Settings → Domains → Add your domain
3. Follow Vercel's instructions to point DNS

---

## Optional: Add AI Tutor (Gemini)

The Academy mode has an AI Tutor that needs a Gemini API key:

1. Go to [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Create an API key (free)
3. Create a file called `.env` in your project root:
```
VITE_GEMINI_API_KEY=your-key-here
```
4. Restart the dev server or redeploy

> [!info] The RPG mode works perfectly WITHOUT an API key. This is only for the Academy mode's AI Tutor feature.

---

## Updating Your Game

After making changes:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel auto-deploys every push. Your live site updates in ~60 seconds.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm: command not found` | Install Node.js (Step 0) |
| `git: command not found` | Install Git: [https://git-scm.com](https://git-scm.com) |
| Vercel build fails | Make sure `npm run build` works locally first |
| Game shows blank page | Open browser console (F12), check for errors |
| Pyodide takes long to load | Normal! First load downloads ~15MB Python engine. Cached after that. |
