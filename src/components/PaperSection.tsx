export function PaperSection({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="mb-8" data-aos="fade-up">
			<h2 className="paper-section-title">{title}</h2>
			{children}
		</section>
	);
}
