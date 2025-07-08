// app/users/loading.tsx (lub inny segment)
"use client";

import React from "react";

const cytaty = [
  "\u201eMa\u0142e kroki \u2192 wielkie zmiany. Jeste\u015b na dobrej drodze.”",
  "\u201eKa\u017cdy wyb\u00f3r przybli\u017ca Ci\u0119 do celu. Dzi\u015b te\u017c go zrobisz.”",
  "\u201eZadbaj o siebie. Twoje cia\u0142o Ci si\u0119 odwdzi\u0119czy.”",
  "\u201eJeszcze tylko chwila\u2026 i wracamy do dzia\u0142ania!”",
  "\u201eEatAI analizuje, Ty robisz post\u0119p.”",
];

const Loading = () => {
  const cytat = cytaty[Math.floor(Math.random() * cytaty.length)];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-200/60 to-emerald-100/60 backdrop-blur-md text-center p-6 animate-fade-in">
      <div className="text-2xl sm:text-3xl font-bold text-primary drop-shadow-md mb-4">
        {cytat}
      </div>
      <p className="text-base-content text-sm opacity-70 mb-8">
        EatAI przygotowuje wszystko dla Ciebie...
      </p>
      <span className="loading loading-dots loading-lg text-secondary"></span>
    </div>
  );
};

export default Loading;
