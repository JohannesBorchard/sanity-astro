import react from '@astrojs/react'
import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
	output: 'static',
	integrations: [
		sanity({
			projectId: 'utl6w4lh', // Aus der .env Datei
			dataset: 'production', // Normalerweise "production"
			useCdn: process.env.NODE_ENV === 'production',
			apiVersion: '2025-01-28',
			studioBasePath: '/admin',
		}),
		react(),
	],
})
