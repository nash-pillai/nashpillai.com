import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`mb-16 md:mb-24 ${className}`}>
      <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8 flex items-center gap-4">
        {title}
        <span className="h-px bg-zinc-800 flex-grow" />
      </h2>
      <div className="space-y-8 md:space-y-12">
        {children}
      </div>
    </section>
  );
};
