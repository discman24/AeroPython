import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const PORTRAITS = {
  elder: '🧙',
  guardian: '⚔️',
  keeper: '🗝️',
  forgemaster: '🔨',
  default: '💬',
};

export default function DialogueBox({ dialogues, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const current = dialogues[currentIndex];

  // Typewriter effect
  useEffect(() => {
    if (!current) return;
    setDisplayedText('');
    setIsTyping(true);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayedText(current.text.slice(0, i));
      if (i >= current.text.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [currentIndex, current]);

  const handleAdvance = () => {
    if (isTyping) {
      // Skip to full text
      setDisplayedText(current.text);
      setIsTyping(false);
      return;
    }
    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  if (!current) return null;

  const portrait = PORTRAITS[current.portrait] || PORTRAITS.default;
  const isLast = currentIndex === dialogues.length - 1;

  return (
    <div
      onClick={handleAdvance}
      className="relative bg-slate-900 border border-slate-700 rounded-2xl p-5 cursor-pointer select-none hover:border-slate-600 transition-colors group"
    >
      {/* Speaker name */}
      <div className="absolute -top-3 left-5 px-3 py-0.5 bg-slate-800 border border-slate-700 rounded-full">
        <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">
          {portrait} {current.speaker}
        </span>
      </div>

      {/* Text */}
      <p className="text-sm md:text-base text-slate-200 leading-relaxed mt-2 min-h-[3rem]">
        {displayedText}
        {isTyping && <span className="inline-block w-0.5 h-4 bg-cyan-400 ml-0.5 animate-pulse" />}
      </p>

      {/* Advance indicator */}
      <div className="flex items-center justify-end mt-3 gap-1.5">
        <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
          {isTyping ? 'Click to skip' : isLast ? 'Continue' : `${currentIndex + 1}/${dialogues.length}`}
        </span>
        <ChevronRight className={`w-3.5 h-3.5 text-slate-600 ${!isTyping ? 'group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all' : ''}`} />
      </div>
    </div>
  );
}
