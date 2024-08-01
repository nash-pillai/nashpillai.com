"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			once: true,
			// disable: "phone",
			duration: 600,
			easing: "ease-out-sine",
		});
	});
	return <div className="flex min-h-screen flex-col">{children}</div>;
}
