import type { ActionFunctionArgs } from "react-router-dom";
import { validateProductForm } from "../utils";
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
  const formData = Object.fromEntries(await request.formData());
  const data: ProductType = {
    name: formData.name as string,
    price: parseFloat(formData.price as string),
  };
  const error = validateProductForm(data);

  if (!error) {
    await addProduct();
  }
  return error;
};
