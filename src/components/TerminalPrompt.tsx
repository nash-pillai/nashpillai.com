import React from "react";

export function TerminalPrompt({ 
  user = "nash", 
  host = "nixos", 
  dir = "~", 
  command 
}: { 
  user?: string; 
  host?: string; 
  dir?: string; 
  command?: string | React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-sm sm:text-base">
      <div className="flex items-center">
        <span className="text-green-500 font-bold">[{user}@{host}</span>
        <span className="text-gray-300 font-bold">:</span>
        <span className="text-cyan-400 font-bold">{dir}</span>
        <span className="text-green-500 font-bold">]$</span>
      </div>
      {command && (
        <div className="text-gray-100 whitespace-pre-wrap flex-1 min-w-[200px]">
          {command}
        </div>
      )}
    </div>
  );
}
