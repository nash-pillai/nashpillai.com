import React from "react";
import { TerminalPrompt } from "./TerminalPrompt";

export function TerminalSection({ 
  title, 
  command, 
  children,
  dir = "~"
}: { 
  title: string; 
  command: string; 
  children: React.ReactNode;
  dir?: string;
}) {
  return (
    <section className="mb-12">
      <TerminalPrompt dir={dir} command={command} />
      <div className="pl-4 sm:pl-8 border-l border-gray-800 ml-2 mt-2 py-2">
        <h2 className="text-cyan-400 font-bold mb-4 uppercase tracking-widest text-sm flex items-center">
          <span className="mr-2">#</span> {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
