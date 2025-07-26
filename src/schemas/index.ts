import { array, boolean, number, object, string } from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  name: string(),
  price: number(),
  availability: boolean(),
  createdAt: string(),
  updatedAt: string(),
});

export const ProductsSchema = array(ProductSchema);
