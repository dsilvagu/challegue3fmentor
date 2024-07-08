/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'hgrotesk': ["'Hanken Grotesk Variable'",'sans-serif']
			}
		},
		colors: {
			'plight': 'hsl(0, 100%, 67%)',
			'poyellow': 'hsl(39, 100%, 56%)',
			'pgteal': 'hsl(166, 100%, 37%)',
			'pcblue': 'hsl(234, 85%, 45%)',
			'plsblue': 'hsl(252, 100%, 67%)',
			'plrblue': 'hsl(241, 81%, 54%)',
			'pvblue': 'hsla(256, 72%, 46%, 1)',
			'ppblue': 'hsla(241, 72%, 46%, 0)',
			'pwhite': 'hsl(0, 0%, 100%)',
			'ppblue': 'hsl(221, 100%, 96%)',
			'pllavender': 'hsl(241, 100%, 89%)',
			'pdgblue': 'hsl(224, 30%, 27%)',
		}
	},
	
	plugins: [],
}
