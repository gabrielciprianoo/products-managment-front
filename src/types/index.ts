import type { InferOutput } from "valibot"
import type { DraftProductSchema } from "../schemas"

export type ProductType = { 
    name: string,
    price: number,
    availability?: boolean
}

export type DrafProductType = InferOutput<typeof DraftProductSchema> 