import React from "react";

interface AchievementItemProps {
  title: string;
  description?: string;
}

export const AchievementItem: React.FC<AchievementItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 group">
      <div className="h-1.5 w-1.5 rounded-full bg-zinc-800 group-hover:bg-zinc-500 mt-2 transition-colors hidden md:block" />
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-zinc-100 group-hover:text-white transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-zinc-500 leading-relaxed font-mono tracking-tight">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
