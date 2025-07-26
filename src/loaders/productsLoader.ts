import { getProducts } from "../services";

export const loader = async () => {
  const response = await getProducts();
  console.log(response);
};
