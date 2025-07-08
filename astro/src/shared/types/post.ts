export type Post = {
	title: string
	slug?: { current: string }
	publishedAt?: string
	body?: unknown
}
