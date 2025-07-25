import type { ActionFunctionArgs } from "react-router-dom";
import { parseFormData, validateProductForm } from "../utils";
import type { ProductType } from "../types";
import { addProduct } from "../services";

export async function action({ request }: ActionFunctionArgs) {
  switch (request.method) {
    case "POST":
      return await addProductAction(request);
      break;

    default:
      break;
  }
}

const addProductAction = async (request: Request) => {
  const formData = await request.formData();
  const rawData = parseFormData<ProductType>(formData);

  const data: ProductType = {
    name: rawData.name ?? '',
    price: parseFloat(String(rawData.price ?? '0')),
  };
  const error = validateProductForm(data);

  if (!error) {
    await addProduct(data);
  }
  return error;
};
