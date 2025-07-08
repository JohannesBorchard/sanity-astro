import { createClient } from '@sanity/client'

export const sanityClient = createClient({
	projectId: 'utl6w4lh',
	dataset: 'production',
	apiVersion: '2025-01-28',
	useCdn: process.env.NODE_ENV === 'production',
})
