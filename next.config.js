/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const { env } = await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
	async redirects() {
		return [
			{ source: "/about", destination: "https://youtu.be/dQw4w9WgXcQs", permanent: false },
			{ source: "/linkedin", destination: "https://linkedin.com/in/nash-pillai", permanent: false },
		];
	},
	async rewrites() {
		return [
			{ source: "/resume", destination: env.RESUME_URL },
			{ source: "/headshot", destination: env.HEADSHOT_URL },
		];
	},
};

export default config;
