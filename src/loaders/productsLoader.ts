import { getProducts } from "../services";

export const loader = async () => {
  const products = await getProducts();
  return products
};
