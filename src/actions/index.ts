import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { parseFormData, validateProductForm } from "../utils";
import type { DrafProductType, ProductType } from "../types";
import { addProduct, updateProduct } from "../services";
import { notify } from "../utils/notify";

export async function action({ request, params}: ActionFunctionArgs) {
  switch (request.method) {
    case "POST":
      return await addProductAction(request);
    case "PUT":
      return await updateProductAction(request, params);
    default:
      break;
  }
}

const addProductAction = async (request: Request) => {
  const formData = await request.formData();
  const rawData = parseFormData<ProductType>(formData);

  const data: DrafProductType = {
    name: rawData.name ?? "",
    price: parseFloat(String(rawData.price ?? "0")),
  };
  const error = validateProductForm(data);

  if (!error) {
    await addProduct(data);
    notify("success", "Product Added Successfully");
    return redirect("/");
  }
  return error;
};

const updateProductAction = async (
  request: Request,
   params : ActionFunctionArgs['params']
) => {
  const formData = await request.formData();
  const rawData = parseFormData<DrafProductType>(formData);
  const id = params.id;
  const data: DrafProductType = {
    name: rawData.name ?? "",
    price: parseFloat(String(rawData.price ?? "0")),
    availability: String(rawData.availability) === "true" 
  };
  const error = validateProductForm(data);

  if (!error) {
    await updateProduct(data, Number(id));
    notify("success", "Product Updated Successfully");
    return redirect("/");
  }
  return error;
};
