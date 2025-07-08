import react from '@astrojs/react'
import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
	integrations: [
		sanity({
			projectId: 'utl6w4lh', // Aus der .env Datei
			dataset: 'production', // Normalerweise "production"
			useCdn: false,
			apiVersion: '2025-01-28',
			studioBasePath: '/admin',
		}),
		react(),
	],
})
