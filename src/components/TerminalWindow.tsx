import React from "react";

export function TerminalWindow({ children, title = "nix-shell" }: { children: React.ReactNode, title?: string }) {
  return (
    <div className="w-full max-w-5xl mx-auto my-8 border border-gray-800 rounded-sm overflow-hidden bg-black/90 shadow-[0_0_15px_rgba(0,255,0,0.1)]">
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-1 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="text-gray-500 text-xs font-mono">{title}</div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        {children}
      </div>
    </div>
  );
}
