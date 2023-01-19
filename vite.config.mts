import { sveltekit } from 'npm:@sveltejs/kit/vite';
import { extractorSvelte, presetAttributify, presetUno, transformerDirectives } from 'npm:unocss';
import UnoCSS from 'npm:unocss/vite';
import type { UserConfig } from 'npm:vite';

import "npm:@iconify/svelte";


const config: UserConfig = {
	resolve: {
		alias: {
			'@iconify/svelte': '@iconify/svelte'
		},
	},
	plugins: [
		UnoCSS({
			transformers: [transformerDirectives()],
			extractors: [extractorSvelte],
			presets: [
				presetAttributify(),
				presetUno(),
			]
		}),
		sveltekit(),
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