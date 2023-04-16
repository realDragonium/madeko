import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
		alias: {
			'@': resolve(__dirname, '/src')
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, '/src')
		}
	}
});
