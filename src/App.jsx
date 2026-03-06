import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Award, 
  Cpu, 
  Zap, 
  ChevronRight, 
  MessageSquare, 
  Sparkles, 
  Volume2, 
  X, 
  ShieldCheck 
} from 'lucide-react';

/**
 * ROADMAP DATA
 */
const roadmap = [
  { id: 1, title: "The Launchpad", topic: "Variables & Syntax", challenge: "Create a 'Bio-Link' script that shares your socials.", details: "Learn how to store text and numbers." },
  { id: 2, title: "Logic Gates", topic: "If/Else & Loops", challenge: "Build a 'Password Validator' security bot.", details: "Make your code think and repeat tasks." },
  { id: 3, title: "Data Vaults", topic: "Lists & Dicts", challenge: "Design an 'Inventory System' for an RPG.", details: "Organize massive amounts of info easily." },
  { id: 4, title: "Superpowers", topic: "Functions", challenge: "Write a 'Universal Converter' function.", details: "Package your code into reusable tools." },
  { id: 5, title: "Data Extraction", topic: "Files & APIs", challenge: "Scrape live game stats from the web.", details: "Pull real-world data into your Python world." },
  { id: 6, title: "The Architect", topic: "OOP (Classes)", challenge: "Model a 'Virtual Pet' with unique traits.", details: "Build complex blueprints for objects." },
  { id: 7, title: "Pythonic Art", topic: "Comprehensions", challenge: "Refactor a legacy script into 5 lines of code.", details: "Master the art of elegant, concise Python." },
  { id: 8, title: "Web Explorer", topic: "Scraping & Requests", challenge: "Build a price tracker for your favorite store.", details: "Automatically monitor the web for changes." },
  { id: 9, title: "Data Scientist", topic: "Pandas & NumPy", challenge: "Analyze your own screen time data.", details: "Turn raw numbers into visual insights." },
  { id: 10, title: "Automator", topic: "OS & Pathlib", challenge: "Create a bot that organizes your Desktop.", details: "Save hours by automating repetitive file tasks." },
  { id: 11, title: "App Builder", topic: "Flask or Tkinter", challenge: "Create a custom To-Do Desktop App.", details: "Build your first full graphical interface." },
  { id: 12, title: "Final Boss", topic: "Capstone Project", challenge: "Build a Real-Time Crypto/Stock Bot.", details: "Integrate everything into a professional tool." }
];

/**
 * API CONFIGURATION
 * Optimized for Vercel/Vite deployment compatibility.
 */
const getApiKey = () => {
  try {
    // Attempting to access Vite environment variables safely
    return import.meta.env.VITE_GEMINI_API_KEY || "";
  } catch (e) {
    return "";
  }
};

const apiKey = getApiKey();

const App = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [showTutor, setShowTutor] = useState(false);
  const [tutorQuery, setTutorQuery] = useState("");
  const [tutorResponse, setTutorResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [badgeUrl, setBadgeUrl] = useState(null);
  const [isGeneratingBadge, setIsGeneratingBadge] = useState(false);

  useEffect(() => {
    setTutorResponse("");
    setBadgeUrl(null);
    if (window.innerWidth < 1024) {
      const element = document.getElementById('mission-root');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeWeek]);

  const askAITutor = async () => {
    if (!tutorQuery || !apiKey) {
      if (!apiKey) setTutorResponse("⚠️ API Offline: Check Vercel Env Variables.");
      return;
    }
    setIsLoading(true);
    setTutorResponse("");
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Explain simply: ${tutorQuery}` }] }],
          systemInstruction: { parts: [{ text: "Expert Python teacher. Use emojis. Max 3 sentences." }] }
        })
      });
      const result = await response.json();
      setTutorResponse(result.candidates?.[0]?.content?.parts?.[0]?.text || "No response.");
    } catch (error) {
      setTutorResponse("Connection lost.");
    } finally {
      setIsLoading(false);
    }
  };

  const generateBadge = async (topic) => {
    if (!apiKey) return;
    setIsGeneratingBadge(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ instances: { prompt: `Futuristic holographic badge for ${topic}` }, parameters: { sampleCount: 1 } })
      });
      const result = await response.json();
      if (result.predictions?.[0]?.bytesBase64Encoded) {
        setBadgeUrl(`data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsGeneratingBadge(false);
    }
  };

  const speakResponse = async (text) => {
    if (!apiKey) return;
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Say: ${text}` }] }],
          generationConfig: { responseModalities: ["AUDIO"], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Puck" } } } },
          model: "gemini-2.5-flash-preview-tts"
        })
      });
      const result = await response.json();
      const pcmData = result.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
      if (pcmData) new Audio(`data:audio/wav;base64,${pcmData}`).play();
    } catch (e) { console.error(e); }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative isolate">
      {/* BACKGROUND DECOR: Pushed to bottom layer */}
      <div className="fixed inset-0 pointer-events-none opacity-20 -z-10">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-600 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 relative z-10 flex flex-col gap-12">
        {/* HEADER: Block element ensures no vertical overlap */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-8">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-slate-900 border border-white/10">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>';
                }} 
              />
            </div>
            <div>
              <h1 className="text-2xl font-black italic tracking-tighter uppercase">Aero<span className="text-cyan-400">Python</span></h1>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Antigravity Academy</p>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 bg-slate-900 border rounded-full text-[10px] font-black uppercase ${apiKey ? 'border-cyan-500/50 text-cyan-400' : 'border-red-500/50 text-red-400'}`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{apiKey ? 'API Online' : 'API Offline'}</span>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* NAVIGATION: Sidebar is relative z-20 to stay on top */}
          <nav className="lg:col-span-4 space-y-6 relative z-20">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Mission Roadmap</h2>
              <span className="text-[10px] font-bold text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded-md">{Math.round((activeWeek/12)*100)}%</span>
            </div>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {roadmap.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveWeek(step.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-5 ${
                    activeWeek === step.id 
                    ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10' 
                    : 'bg-slate-900/40 border-white/5 hover:border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-xs ${activeWeek === step.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{step.title}</h3>
                    <p className="text-[9px] text-slate-600 uppercase font-black">{step.topic}</p>
                  </div>
                  {activeWeek === step.id && <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />}
                </button>
              ))}
            </div>
          </nav>

          {/* MISSION CONTENT AREA */}
          <section className="lg:col-span-8" id="mission-root">
            <div key={activeWeek} className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative z-10 flex flex-col md:flex-row gap-12">
                <div className="flex-1 space-y-8">
                  <div>
                    <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Active Mission</span>
                    <h2 className="text-4xl font-black mt-2 tracking-tighter leading-none">{roadmap[activeWeek-1].title}</h2>
                  </div>

                  <div className="p-8 bg-slate-950/50 border border-white/5 rounded-3xl">
                    <h4 className="text-[9px] font-black text-slate-500 uppercase mb-4 flex items-center gap-2"><Terminal className="w-3 h-3" /> The Challenge</h4>
                    <p className="text-xl font-medium text-slate-200 leading-relaxed">{roadmap[activeWeek-1].challenge}</p>
                    <p className="mt-6 pt-6 border-t border-white/5 text-xs text-slate-500 italic">{roadmap[activeWeek-1].details}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => setShowTutor(true)} className="flex-1 py-5 bg-slate-800 hover:bg-slate-700 rounded-2xl font-bold text-[10px] flex items-center justify-center gap-3 transition-transform active:scale-95"><MessageSquare className="w-4 h-4 text-cyan-400" /> AI MENTOR</button>
                    <button onClick={() => generateBadge(roadmap[activeWeek-1].topic)} className="flex-1 py-5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 rounded-2xl font-bold text-[10px] flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-cyan-500/20"><Award className="w-4 h-4" /> CLAIM BADGE</button>
                  </div>
                </div>

                <div className="w-full md:w-64 h-64 bg-slate-950 rounded-3xl border border-white/5 flex items-center justify-center p-6 flex-shrink-0">
                  {isGeneratingBadge ? (
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Minting...</span>
                    </div>
                  ) : badgeUrl ? (
                    <img src={badgeUrl} alt="Badge" className="w-full h-full object-contain animate-in zoom-in" />
                  ) : (
                    <div className="text-center">
                      <Sparkles className="w-12 h-12 text-slate-900 mx-auto mb-4" />
                      <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest">LOCKED</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* AI OVERLAY */}
            {showTutor && (
              <div className="mt-8 bg-slate-900 border border-cyan-500/20 rounded-[2.5rem] p-8 shadow-2xl animate-in slide-in-from-top-4 relative z-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Instructional Node</span>
                  <button onClick={() => setShowTutor(false)} className="p-2 hover:bg-slate-800 rounded-full"><X className="w-5 h-5 text-slate-600" /></button>
                </div>
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    value={tutorQuery}
                    onChange={(e) => setTutorQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && askAITutor()}
                    placeholder="Describe your blocker..."
                    className="flex-1 bg-slate-950 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-cyan-500/50 outline-none text-white"
                  />
                  <button onClick={askAITutor} className="px-8 bg-cyan-600 text-slate-950 rounded-2xl font-black">{isLoading ? '...' : <ChevronRight />}</button>
                </div>
                {tutorResponse && (
                  <div className="mt-8 p-8 bg-slate-950 border border-white/5 rounded-3xl relative group">
                    <p className="text-sm text-slate-300 italic leading-relaxed">"{tutorResponse}"</p>
                    <button onClick={() => speakResponse(tutorResponse)} className="absolute bottom-4 right-4 p-3 rounded-full bg-slate-900 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all hover:scale-110"><Volume2 className="w-4 h-4" /></button>
                  </div>
                )}
              </div>
            )}
          </section>
        </main>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default App;
