import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { parseFormData, validateProductForm } from "../utils";
import type { DrafProductType, ProductType } from "../types";
import { addProduct, deleteProduct, updateProduct } from "../services";
import { notify } from "../utils/notify";

export const addProductAction = async ({ request }: ActionFunctionArgs) => {
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

export const updateProductAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const rawData = parseFormData<DrafProductType>(formData);
  const id = params.id;
  const data: DrafProductType = {
    name: rawData.name ?? "",
    price: parseFloat(String(rawData.price ?? "0")),
    availability: String(rawData.availability) === "true",
  };
  const error = validateProductForm(data);

  if (!error) {
    await updateProduct(data, Number(id));
    notify("success", "Product Updated Successfully");
    return redirect("/");
  }
  return error;
};

export const deleteProductAction = async ({ params }: ActionFunctionArgs) => {
  const id = params.id;
  if (!id) return redirect("/");
  const result = await deleteProduct(Number(id));
  if (!result) {
    notify("error", "Error ocurred");
  }
  notify("success", "Product Deleted Successfully");
  return redirect("/");
};
