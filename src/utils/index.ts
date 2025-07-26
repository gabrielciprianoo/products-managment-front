import type { DrafProductType } from "../types";

export const validateProductForm = (data: DrafProductType) => {
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

export function formatCurrency( amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}