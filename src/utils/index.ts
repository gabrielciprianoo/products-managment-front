import type { ProductType } from "../types";

export const validateProductForm = (data: ProductType) => {
  let error = "";
  if (!data.name?.trim() || isNaN(data.price)) {
    error = "All fields are required and must have valid values.";
  }
  return error;
};


export function parseFormData<T extends Record<string, unknown>>(formData: FormData): Partial<T> {
  const entries = Object.fromEntries(formData.entries());
  return entries as Partial<T>;
}