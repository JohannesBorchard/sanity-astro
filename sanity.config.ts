import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { blockContentType } from "./src/schemaTypes/blockContent"
import { postType } from "./src/schemaTypes/post"

export default defineConfig({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,
	plugins: [structureTool()],
	schema: {
		types: [postType, blockContentType],
	},
})
