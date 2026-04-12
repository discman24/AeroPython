import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'aeropython-progress';

const defaultProgress = {
  completedModules: [],
  quizScores: {},          // { moduleId: { best: 5, attempts: 2, lastAttempt: '2025-...' } }
  currentModule: 1,
  streak: { count: 0, lastDate: null },
  totalXP: 0,
  badges: [],              // [{ moduleId, topic, url, earnedAt }]
  dailyCompleted: [],      // ['2025-03-06', '2025-03-07', ...]
  startedAt: new Date().toISOString(),
};

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultProgress, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load progress:', e);
    }
    return { ...defaultProgress };
  });

  // Persist on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  }, [progress]);

  const completeModule = useCallback((moduleId) => {
    setProgress(prev => {
      if (prev.completedModules.includes(moduleId)) return prev;
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId],
        totalXP: prev.totalXP + 100,
      };
    });
  }, []);

  const recordQuizScore = useCallback((moduleId, score, total) => {
    setProgress(prev => {
      const existing = prev.quizScores[moduleId] || { best: 0, attempts: 0 };
      const bestScore = Math.max(existing.best, score);
      const xpGain = score > existing.best ? (score - existing.best) * 10 : 0;
      
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [moduleId]: {
            best: bestScore,
            total,
            attempts: existing.attempts + 1,
            lastAttempt: new Date().toISOString(),
          }
        },
        totalXP: prev.totalXP + xpGain,
        // Auto-complete module if quiz score >= 80%
        completedModules: bestScore / total >= 0.8 && !prev.completedModules.includes(moduleId)
          ? [...prev.completedModules, moduleId]
          : prev.completedModules,
      };
    });
  }, []);

  const completeDailyChallenge = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    setProgress(prev => {
      if (prev.dailyCompleted.includes(today)) return prev;

      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const isConsecutive = prev.streak.lastDate === yesterday;

      return {
        ...prev,
        dailyCompleted: [...prev.dailyCompleted, today],
        totalXP: prev.totalXP + 15,
        streak: {
          count: isConsecutive ? prev.streak.count + 1 : 1,
          lastDate: today,
        }
      };
    });
  }, []);

  const addBadge = useCallback((moduleId, topic, url) => {
    setProgress(prev => {
      if (prev.badges.find(b => b.moduleId === moduleId)) return prev;
      return {
        ...prev,
        badges: [...prev.badges, { moduleId, topic, url, earnedAt: new Date().toISOString() }],
        totalXP: prev.totalXP + 50,
      };
    });
  }, []);

  const addXP = useCallback((points) => {
    setProgress(prev => ({ ...prev, totalXP: prev.totalXP + points }));
  }, []);

  const resetProgress = useCallback(() => {
    if (window.confirm('Reset ALL progress? This cannot be undone.')) {
      setProgress({ ...defaultProgress, startedAt: new Date().toISOString() });
    }
  }, []);

  // Derived stats
  const stats = {
    modulesCompleted: progress.completedModules.length,
    totalModules: 12,
    percentComplete: Math.round((progress.completedModules.length / 12) * 100),
    currentStreak: progress.streak.count,
    totalXP: progress.totalXP,
    quizzesPassed: Object.values(progress.quizScores).filter(q => q.best / q.total >= 0.8).length,
    dailyChallengesDone: progress.dailyCompleted.length,
    hasDoneToday: progress.dailyCompleted.includes(new Date().toISOString().split('T')[0]),
  };

  return {
    progress,
    stats,
    completeModule,
    recordQuizScore,
    completeDailyChallenge,
    addBadge,
    addXP,
    resetProgress,
  };
}
