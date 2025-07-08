export type Post = {
	title: string
	publishedAt?: string | null
	slug?: { current: string }
	body?: {
		_type: string
		children?: {
			text: string
		}[]
	}[]
}
