import type { InferOutput } from "valibot"
import type { DraftProductSchema, ProductSchema } from "../schemas"

export type DrafProductType = InferOutput<typeof DraftProductSchema> 
export type ProductType = InferOutput<typeof ProductSchema>