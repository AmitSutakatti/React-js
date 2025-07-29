import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Viewpastes = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id == id);

  if (!paste) {
    return (
      <div className="text-red-400 text-center mt-10 font-semibold">Paste not found.</div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] perspective-[1200px] text-white">
      <div className="w-[90%] max-w-3xl p-8 rounded-3xl bg-[#1e293b] shadow-[0_0_40px_5px_rgba(30,58,138,0.5)] border border-blue-700 animate-3dEnter transition-transform duration-700 ease-out">
        <h2 className="text-xl font-semibold mb-6 text-center text-blue-300 glow-text">Your Paste</h2>

        <input
          className="w-full p-3 rounded-xl bg-[#334155] text-white placeholder:text-slate-400 mb-6 cursor-not-allowed"
          type="text"
          value={paste.title}
          disabled
        />

        <textarea
          className="w-full h-[300px] p-4 rounded-xl bg-[#334155] text-white placeholder:text-slate-400 resize-none cursor-not-allowed"
          value={paste.content}
          disabled
        />
      </div>
    </div>
  );
};

export default Viewpastes;
