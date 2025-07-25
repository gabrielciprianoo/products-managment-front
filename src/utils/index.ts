import type { ProductType } from "../types";

export const validateProductForm = (data: ProductType) => {
  let error = "";
  if (!data.name?.trim() || isNaN(data.price)) {
    error = "Todos los campos son obligatorios y deben tener valores válidos";
  }
  return error;
};


export function parseFormData<T extends Record<string, unknown>>(formData: FormData): Partial<T> {
  const entries = Object.fromEntries(formData.entries());
  return entries as Partial<T>;
}