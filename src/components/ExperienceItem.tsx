import React from "react";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  links?: { label: string; url: string }[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  role,
  period,
  description,
  links = [],
}) => {
  return (
    <div className="group">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
        <h3 className="text-xl font-medium text-zinc-100 group-hover:text-white transition-colors">
          {company}
        </h3>
        <span className="text-sm font-mono text-zinc-500">{period}</span>
      </div>
      <div className="text-sm font-medium text-zinc-400 mb-4">{role}</div>
      <ul className="space-y-3 mb-4">
        {description.map((item, index) => (
          <li key={index} className="text-sm text-zinc-400 leading-relaxed pl-4 border-l border-zinc-800 group-hover:border-zinc-700 transition-colors">
            {item}
          </li>
        ))}
      </ul>
      {links.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
