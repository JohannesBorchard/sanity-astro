import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
	output: 'static',
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': '/src',
				'~': '/src',
				'~/app': '/src/app',
				'~/pages': '/src/pages',
				'~/widgets': '/src/widgets',
				'~/features': '/src/features',
				'~/entities': '/src/entities',
				'~/shared': '/src/shared',
			},
		},
	},
})
