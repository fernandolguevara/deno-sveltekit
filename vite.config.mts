import { sveltekit } from 'npm:@sveltejs/kit/vite';
import type { UserConfig } from 'npm:vite';
import UnoCSS from 'npm:unocss/vite'
import { presetUno, presetIcons, extractorSvelte } from 'npm:unocss';
// import presetWebFonts from 'npm:@unocss/preset-web-fonts';
// import 'npm:@iconify/json';


const config: UserConfig = {
	plugins: [
		sveltekit(),
		UnoCSS({
			extractors: [extractorSvelte],
			mode: 'svelte-scoped',
			presets: [
				presetUno(), presetIcons()
			],
		})
	]
};

export default config;

// presetWebFonts({
// 	provider: 'google',
// 	fonts: {
// 		inter: ['Inter', 'sans-serif']
// 	}
// })
// 	theme: {
// 		colors: {}
// 	}