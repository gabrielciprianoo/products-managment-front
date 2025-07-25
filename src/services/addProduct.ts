import { safeParse } from "valibot"
import type { DrafProductType } from "../types"
import { DraftProductSchema } from "../schemas"
import axios from "axios";

export const addProduct = async (data : DrafProductType) => { 
    try {
        const result = safeParse(DraftProductSchema, data);

        if(!result.success){
            throw new Error("Data validation failed");
        }

        const url = import.meta.env.VITE_API_URL
        const response = await axios.post(url, result.output)
        return response.data

    } catch (error) {
        console.log(error)
    }
}