import type { ProductType } from "../types";

export const validateProductForm = (data: ProductType) => {
  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  return error;
};


export function parseFormData<T extends Record<string, unknown>>(formData: FormData): Partial<T> {
  const entries = Object.fromEntries(formData.entries());
  return entries as Partial<T>;
}