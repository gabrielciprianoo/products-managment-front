import { safeParse } from "valibot"
import type { DrafProductType, ProductType } from "../types"
import { DraftProductSchema, ProductSchema, ProductsSchema } from "../schemas"
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

export const getProducts = async () => {
  try {
    const url = import.meta.env.VITE_API_URL;
    const { data } = await axios(url);
    const result = safeParse(ProductsSchema, data.data)

    if(!result.success){
        console.error("Validation issues:", result.issues);
        throw new Error("Data validation failed");
    }

    return result.output;

  } catch (error) {
    console.log(error);
  }
};

export const getProductByID = async ( id : ProductType['id']) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/${id}`;
    const { data } = await axios.get(url);
    const result = safeParse(ProductSchema, data.data)

    if(!result.success){
        console.error("Validation issues:", result.issues);
        throw new Error("Data validation failed");
    }

    return result.output;

  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (data : DrafProductType, id : ProductType['id']) => { 
    try {
        const result = safeParse(DraftProductSchema, data);

        if(!result.success){
            console.log(result.issues)
            return
        }

        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await axios.put(url, result.output)
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (id : ProductType['id']) => {
  try {
      if(!id) {
        throw new Error('Invaild Id')
      }

       const url = `${import.meta.env.VITE_API_URL}/${id}`
       const { data } = await axios.delete(url);
       return data;
  } catch (error) {
    console.log(error)
  }
}
export const updateProductAvailability = async (id : ProductType['id']) => {
  try {
      if(!id) {
        throw new Error('Invaild Id')
      }

       const url = `${import.meta.env.VITE_API_URL}/${id}`
       const { data } = await axios.patch(url);
       return data;
  } catch (error) {
    console.log(error)
  }
}