// src/components/Background.jsx

import React from "react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* 
        This div sets the base background color for the entire page.
        - Light mode: A soft, off-white (slate-50).
        - Dark mode: Pure black.
      */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-black" />

      {/* 
        This container holds the animated blobs.
        We use different colors and opacities for light vs. dark mode.
      */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Blob 1: Purple */}
        <div 
          className="
            absolute -top-20 -left-20 h-[300px] w-[300px] animate-blob-1 rounded-full blur-3xl
            bg-purple-200/20 dark:bg-purple-600/20
          " 
        />
        
        {/* Blob 2: Blue */}
        <div 
          className="
            absolute -bottom-20 -right-20 h-[300px] w-[300px] animate-blob-2 rounded-full blur-3xl
            bg-blue-200/20 dark:bg-blue-600/20
          " 
        />

        {/* Blob 3: Pink */}
        <div 
          className="
            absolute -bottom-1/4 left-1/4 h-[200px] w-[200px] animate-blob-3 rounded-full blur-3xl
            bg-pink-200/20 dark:bg-pink-600/20
          " 
        />
      </div>
    </div>
  );
}