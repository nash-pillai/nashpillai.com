import React from "react";

interface GpgKeyProps {
  fingerprint: string;
}

export const GpgKey: React.FC<GpgKeyProps> = ({ fingerprint }) => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-xl backdrop-blur-sm group hover:border-zinc-700 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase flex items-center gap-2">
            GPG Fingerprint
            <span className="h-px w-8 bg-zinc-800" />
          </h3>
          <p className="font-mono text-base md:text-lg text-zinc-300 break-all leading-relaxed group-hover:text-white transition-colors">
            {fingerprint}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/nash.gpg"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-zinc-100 text-zinc-950 font-medium text-sm rounded-lg hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-black/20"
          >
            Download Public Key
          </a>
        </div>
      </div>
    </div>
  );
};
