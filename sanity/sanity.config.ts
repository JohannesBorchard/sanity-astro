import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { blockContentType } from "./schemas/blockContent"
import { postType } from "./schemas/post"

export default defineConfig({
	projectId: "utl6w4lh",
	dataset: "production",
	plugins: [structureTool()],
	schema: {
		types: [postType, blockContentType],
	},
})
