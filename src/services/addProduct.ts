import { safeParse } from "valibot"
import type { DrafProductType } from "../types"
import { DraftProductSchema } from "../schemas"

export const addProduct = async (data : DrafProductType) => { 
    try {
        const result = safeParse(DraftProductSchema, data);

        if(!result.success){
            throw new Error("Data validation failed");
        }

        console.log('calling to REST API...')

    } catch (error) {
        console.log(error)
    }
}