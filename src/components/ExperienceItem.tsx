export function ExperienceItem({
	title,
	subtitle,
	date,
	location,
	children,
}: {
	title: string;
	subtitle?: string;
	date: string;
	location?: string;
	children?: React.ReactNode;
}) {
	return (
		<div className="paper-item break-inside-avoid">
			<div className="paper-item-header">
				<span>{title}</span>
				<span className="font-normal text-[0.95em]">{date}</span>
			</div>
			{(subtitle || location) && (
				<div className="paper-item-subheader">
					{subtitle && <span>{subtitle}</span>}
					{location && <span className="font-normal not-italic">{location}</span>}
				</div>
			)}
			{children && <ul className="paper-list">{children}</ul>}
		</div>
	);
}
