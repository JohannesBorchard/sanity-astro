import { defineField, defineType } from "sanity"

export const postType = defineType({
	name: "post",
	title: "Blog Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
		}),
	],
})
