/* MoodBoard AI Starter Template */

// src/App.jsx
import React, { useState } from "react";
import { MoodInput } from "./components/MoodInput";
import { MoodBoard } from "./components/MoodBoard";

export default function App() {
  const [mood, setMood] = useState("");

  return (
    <div className="min-h-screen bg-neutral-100 p-4 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">MoodBoard AI 🌈</h1>
      <MoodInput setMood={setMood} />
      {mood && <MoodBoard mood={mood} />}
    </div>
  );
}

// src/components/MoodInput.jsx
import React from "react";

export function MoodInput({ setMood }) {
  const moods = ["happy", "sad", "calm", "anxious", "excited", "tired"];

  return (
    <div className="flex flex-col items-center mb-6">
      <label className="mb-2 text-lg font-medium">How are you feeling today?</label>
      <select
        className="p-2 rounded-lg border border-gray-300"
        onChange={(e) => setMood(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Select a mood</option>
        {moods.map((m, i) => (
          <option key={i} value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
}

// src/components/MoodBoard.jsx
import React from "react";

const moodColors = {
  happy: ["#FFFACD", "#FFD700", "#FFA500"],
  sad: ["#A2B9BC", "#B2AD7F", "#878f99"],
  calm: ["#E0FFFF", "#AFEEEE", "#B0E0E6"],
  anxious: ["#FFE4E1", "#FA8072", "#F08080"],
  excited: ["#FF69B4", "#FF4500", "#FFD700"],
  tired: ["#C0C0C0", "#D3D3D3", "#A9A9A9"]
};

export function MoodBoard({ mood }) {
  const colors = moodColors[mood] || ["#eee"];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
      {colors.map((color, i) => (
        <div
          key={i}
          className="h-32 rounded-xl shadow-md"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}
