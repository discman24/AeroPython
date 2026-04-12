import React, { useState, useEffect, useCallback } from 'react';
import { Zap, Heart, Swords, Shield, Star, Map, User, ArrowLeft, Flame, Trophy, Crown } from 'lucide-react';
import rpgQuests from '../../data/rpgQuests';
import WorldMap from './WorldMap';
import BattleScreen from './BattleScreen';
import DialogueBox from './DialogueBox';

const STORAGE_KEY = 'aeropython-rpg';

const XP_PER_LEVEL = 100; // XP needed per level

function calculateLevel(xp) {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

const defaultRpgState = {
  heroName: '',
  totalXP: 0,
  completedQuests: [],    // ["r1q1", "r1q2", ...]
  completedRegions: [],   // [1, 2, ...]
  currentRegion: null,
  hasSeenIntro: {},        // { 1: true, 2: true }
  createdAt: null,
};

export default function RPGGame({ onExit }) {
  const [rpgState, setRpgState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...defaultRpgState, ...JSON.parse(saved) };
    } catch (e) {}
    return { ...defaultRpgState };
  });

  const [gameScreen, setGameScreen] = useState(rpgState.heroName ? 'map' : 'title');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [currentQuest, setCurrentQuest] = useState(null);
  const [showDialogue, setShowDialogue] = useState(null); // { type: 'intro'|'completion', dialogues: [] }

  // Persist state
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(rpgState));
    } catch (e) {}
  }, [rpgState]);

  const playerLevel = calculateLevel(rpgState.totalXP);

  // Get all regions as array
  const regions = Object.values(rpgQuests).map(r => ({
    ...r,
    quests: r.quests,
  }));

  // ─── Title Screen ───
  const TitleScreen = () => {
    const [name, setName] = useState('');

    const startGame = () => {
      if (!name.trim()) return;
      setRpgState(prev => ({
        ...prev,
        heroName: name.trim(),
        createdAt: new Date().toISOString(),
      }));
      setGameScreen('map');
    };

    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 py-10">
        {/* Logo */}
        <div className="space-y-3">
          <div className="text-6xl mb-4">🐍⚔️</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
            Aero<span className="text-cyan-400">Python</span>
          </h1>
          <p className="text-xs font-black text-slate-600 uppercase tracking-[0.4em]">
            Antigravity Academy — RPG Mode
          </p>
        </div>

        <p className="text-slate-400 text-sm max-w-md leading-relaxed">
          Learn Python by battling monsters, solving quests, and conquering the
          four regions of the Coding Realm. Every line of code is a weapon.
        </p>

        {/* Name input */}
        <div className="space-y-4 w-full max-w-xs">
          <div>
            <label className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-2">
              Name Your Hero
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && startGame()}
              placeholder="Enter hero name..."
              maxLength={20}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-center text-lg font-bold text-white placeholder:text-slate-700 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all"
              autoFocus
            />
          </div>
          <button
            onClick={startGame}
            disabled={!name.trim()}
            className="w-full py-3.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 rounded-xl font-black text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 uppercase tracking-wider"
          >
            ⚔️ Begin Adventure
          </button>
        </div>

        {rpgState.heroName && (
          <button
            onClick={() => { setGameScreen('map'); }}
            className="text-[10px] font-bold text-cyan-500 hover:text-cyan-400 uppercase tracking-widest"
          >
            Continue as {rpgState.heroName} →
          </button>
        )}
      </div>
    );
  };

  // ─── Character Panel (sidebar) ───
  const CharacterPanel = () => {
    const xpInLevel = rpgState.totalXP % XP_PER_LEVEL;
    const xpPercent = (xpInLevel / XP_PER_LEVEL) * 100;
    const questsDone = rpgState.completedQuests.length;
    const regionsDone = rpgState.completedRegions.length;

    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
        {/* Hero identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-lg">
            ⚔️
          </div>
          <div>
            <h3 className="font-black text-sm text-white">{rpgState.heroName}</h3>
            <p className="text-[9px] font-bold text-cyan-500 uppercase tracking-widest">Level {playerLevel} Coder</p>
          </div>
        </div>

        {/* XP bar */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">XP</span>
            <span className="text-[9px] font-bold text-amber-400 tabular-nums">{rpgState.totalXP}</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${xpPercent}%` }}
            />
          </div>
          <p className="text-[8px] font-bold text-slate-700 mt-1 text-right tabular-nums">
            {xpInLevel}/{XP_PER_LEVEL} to Level {playerLevel + 1}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-950 rounded-lg p-2.5 text-center">
            <Swords className="w-3.5 h-3.5 text-red-400 mx-auto mb-1" />
            <span className="text-xs font-black text-white block">{questsDone}</span>
            <span className="text-[8px] font-bold text-slate-600 uppercase">Quests</span>
          </div>
          <div className="bg-slate-950 rounded-lg p-2.5 text-center">
            <Map className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
            <span className="text-xs font-black text-white block">{regionsDone}/4</span>
            <span className="text-[8px] font-bold text-slate-600 uppercase">Regions</span>
          </div>
        </div>
      </div>
    );
  };

  // ─── Region Quest List ───
  const RegionScreen = () => {
    const region = selectedRegion;
    if (!region) return null;

    // Check if we need to show intro dialogue
    if (!rpgState.hasSeenIntro[region.id] && !showDialogue) {
      setShowDialogue({ type: 'intro', dialogues: region.intro });
      return null;
    }

    const handleQuestSelect = (quest) => {
      if (rpgState.completedQuests.includes(quest.id)) return; // Already done
      setCurrentQuest(quest);
      setGameScreen('battle');
    };

    return (
      <div className="space-y-5">
        {/* Dialogue overlay */}
        {showDialogue && (
          <DialogueBox
            dialogues={showDialogue.dialogues}
            onComplete={() => {
              if (showDialogue.type === 'intro') {
                setRpgState(prev => ({
                  ...prev,
                  hasSeenIntro: { ...prev.hasSeenIntro, [region.id]: true },
                }));
              }
              setShowDialogue(null);
            }}
          />
        )}

        {/* Region header */}
        {!showDialogue && (
          <>
            <div className="flex items-center gap-3 mb-2">
              <button
                onClick={() => { setSelectedRegion(null); setGameScreen('map'); }}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400" />
              </button>
              <div>
                <h2 className="text-xl font-black" style={{ color: region.color }}>
                  {region.icon} {region.name}
                </h2>
                <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{region.description}</p>
              </div>
            </div>

            {/* Quest list */}
            <div className="space-y-2">
              {region.quests.map((quest, index) => {
                const isCompleted = rpgState.completedQuests.includes(quest.id);
                const prevCompleted = index === 0 || rpgState.completedQuests.includes(region.quests[index - 1].id);
                const isLocked = !prevCompleted;

                return (
                  <button
                    key={quest.id}
                    onClick={() => !isLocked && handleQuestSelect(quest)}
                    disabled={isLocked || isCompleted}
                    className={`
                      w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4
                      ${isCompleted
                        ? 'bg-emerald-500/5 border-emerald-500/20 opacity-70'
                        : isLocked
                          ? 'bg-slate-900/30 border-slate-800/50 opacity-30 cursor-not-allowed'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-600 cursor-pointer hover:scale-[1.01] active:scale-[0.99]'
                      }
                    `}
                  >
                    {/* Enemy icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                      isCompleted ? 'bg-emerald-500/10' : 'bg-slate-800'
                    }`}>
                      {isCompleted ? <Star className="w-5 h-5 text-emerald-400" /> : quest.enemy.icon}
                    </div>

                    {/* Quest info */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-black text-sm ${isCompleted ? 'text-emerald-400' : 'text-white'}`}>
                        {quest.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 truncate mt-0.5">{quest.story.slice(0, 60)}...</p>
                    </div>

                    {/* Meta */}
                    <div className="flex-shrink-0 text-right">
                      <div className="flex items-center gap-1 text-[9px] font-bold text-slate-600">
                        <Heart className="w-3 h-3 text-red-400" />
                        <span>{quest.enemy.hp} HP</span>
                      </div>
                      <div className="flex items-center gap-1 text-[9px] font-bold text-amber-500 mt-1">
                        <Zap className="w-3 h-3" />
                        <span>+{quest.xpReward} XP</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  };

  // ─── Handle quest victory ───
  const handleVictory = useCallback((quest) => {
    const region = selectedRegion;
    if (!region || !region.quests) {
      setCurrentQuest(null);
      setGameScreen('map');
      return;
    }

    const newCompletedQuests = [...rpgState.completedQuests, quest.id];

    // Check if all quests in region are done
    const allQuestsDone = region.quests.every(q =>
      newCompletedQuests.includes(q.id)
    );

    setRpgState(prev => ({
      ...prev,
      totalXP: prev.totalXP + quest.xpReward,
      completedQuests: newCompletedQuests,
      completedRegions: allQuestsDone
        ? [...new Set([...prev.completedRegions, region.id])]
        : prev.completedRegions,
    }));

    setCurrentQuest(null);

    if (allQuestsDone && region.completion) {
      // Show completion dialogue
      setShowDialogue({ type: 'completion', dialogues: region.completion });
    }

    setGameScreen('region');
  }, [rpgState, selectedRegion]);

  // ─── Handle retreat ───
  const handleRetreat = () => {
    setCurrentQuest(null);
    setGameScreen('region');
  };

  // ─── Handle region select from map ───
  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    setGameScreen('region');
  };

  // ─── Render ───
  return (
    <div className="space-y-5">
      {/* RPG Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {gameScreen !== 'title' && (
            <button
              onClick={onExit}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              title="Exit RPG mode"
            >
              <ArrowLeft className="w-4 h-4 text-slate-400" />
            </button>
          )}
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-500">
            {gameScreen === 'title' ? '' : gameScreen === 'map' ? '🗺️ World Map' : gameScreen === 'region' ? '📜 Quests' : '⚔️ Battle'}
          </h2>
        </div>
        {rpgState.heroName && (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-black">
              <Crown className="w-3 h-3 text-cyan-400" />
              <span className="text-white">Lv.{playerLevel}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-black">
              <Zap className="w-3 h-3 text-amber-400" />
              <span className="text-amber-400 tabular-nums">{rpgState.totalXP}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Game area */}
        <div className={`${gameScreen === 'title' ? 'lg:col-span-12' : 'lg:col-span-9'}`}>
          {gameScreen === 'title' && <TitleScreen />}

          {gameScreen === 'map' && (
            <WorldMap
              regions={regions}
              playerLevel={playerLevel}
              completedRegions={rpgState.completedRegions}
              onSelectRegion={handleSelectRegion}
            />
          )}

          {gameScreen === 'region' && <RegionScreen />}

          {gameScreen === 'battle' && currentQuest && (
            <BattleScreen
              quest={currentQuest}
              onVictory={handleVictory}
              onRetreat={handleRetreat}
              playerStats={{ level: playerLevel, name: rpgState.heroName }}
            />
          )}
        </div>

        {/* Character sidebar */}
        {gameScreen !== 'title' && rpgState.heroName && (
          <div className="lg:col-span-3">
            <CharacterPanel />
          </div>
        )}
      </div>
    </div>
  );
}
