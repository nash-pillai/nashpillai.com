import React from "react";

interface EducationItemProps {
  school: string;
  degree: string;
  period: string;
  details?: string[];
  gpa?: string;
}

export const EducationItem: React.FC<EducationItemProps> = ({
  school,
  degree,
  period,
  details = [],
  gpa,
}) => {
  return (
    <div className="group">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-1">
        <h3 className="text-xl font-medium text-zinc-100 group-hover:text-white transition-colors">
          {school}
        </h3>
        <span className="text-sm font-mono text-zinc-500">{period}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium text-zinc-400">{degree}</div>
        {gpa && <div className="text-xs font-mono text-zinc-500">GPA: {gpa}</div>}
      </div>
      {details.length > 0 && (
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="text-sm text-zinc-500 leading-relaxed pl-4 border-l border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
