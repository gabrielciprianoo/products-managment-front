import type { ProductType } from "../types";

export const validateProductForm = (data: ProductType) => {
  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  return error;
};
