/**
 * AeroPython — Gemini API Utilities
 */

export const getApiKey = () => {
  try {
    return import.meta.env.VITE_GEMINI_API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const askGemini = async (query, moduleContext = "") => {
  const apiKey = getApiKey();
  if (!apiKey) return "⚠️ API Key not detected. Set VITE_GEMINI_API_KEY in your .env file.";

  const contextPrefix = moduleContext
    ? `The student is studying: ${moduleContext}. `
    : "";

  const payload = {
    contents: [{ parts: [{ text: `${contextPrefix}Explain this Python concept simply: ${query}` }] }],
    systemInstruction: {
      parts: [{
        text: "You are a veteran Python coding teacher called AERO. Use emojis. Keep explanations under 5 sentences. Use code examples when helpful. If the student seems stuck, give a hint — not the full answer."
      }]
    }
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
    );
    const result = await response.json();
    return result.candidates?.[0]?.content?.parts?.[0]?.text || "The grid is down. Try again!";
  } catch (error) {
    return "Connection lost to the mainframe.";
  }
};

export const generateBadge = async (topic) => {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  const prompt = `A futuristic neon holographic badge for a student who mastered ${topic}, 3D render, cyberpunk aesthetic.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ instances: { prompt }, parameters: { sampleCount: 1 } })
      }
    );
    const result = await response.json();
    if (result.predictions?.[0]?.bytesBase64Encoded) {
      return `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
    }
    return null;
  } catch (e) {
    console.error("Badge generation failed:", e);
    return null;
  }
};

export const speakText = async (text) => {
  const apiKey = getApiKey();
  if (!apiKey) return;

  const payload = {
    contents: [{ parts: [{ text: `Say encouragingly: ${text}` }] }],
    generationConfig: {
      responseModalalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Puck" } } }
    },
    model: "gemini-2.5-flash-preview-tts"
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
    );
    const result = await response.json();
    const pcmData = result.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
    if (pcmData) {
      new Audio(`data:audio/wav;base64,${pcmData}`).play();
    }
  } catch (e) { console.error(e); }
};
