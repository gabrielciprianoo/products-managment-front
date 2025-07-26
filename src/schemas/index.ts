import { array, boolean, number, object, optional, string } from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
  availability: optional(boolean()),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
  createdAt: string(),
  updatedAt: string(),
});

export const ProductsSchema = array(ProductSchema);
