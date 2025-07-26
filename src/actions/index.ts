import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { parseFormData, validateProductForm } from "../utils";
import type { DrafProductType, ProductType } from "../types";
import { addProduct } from "../services";
import { notify } from "../utils/notify";

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

  const data: DrafProductType = {
    name: rawData.name ?? '',
    price: parseFloat(String(rawData.price ?? '0')),
  };
  const error = validateProductForm(data);

  if (!error) {
      await addProduct(data);
      notify("success", "Product Added Successfully");
      return redirect('/')
  }
  return error;
};
