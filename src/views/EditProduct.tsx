import { Link, Form, useActionData, useLoaderData } from "react-router-dom";
import { ErrorMessage } from "../components";
import type { ProductType } from "../types";

export default function EditProduct() {
  const product = useLoaderData() as ProductType;
  const error = useActionData() as string;
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <h1 className="text-2xl font-medium text-gray-900">
          Edit Product
        </h1>
        <Link
          to="/"
          className="p-2 bg-blue-700 text-sm uppercase cursor-pointer text-white font-bold rounded-md hover:bg-blue-800 transition-colors"
        >
          {" "}
          Back to Products
        </Link>
      </div>

      {error && (<ErrorMessage>{error}</ErrorMessage>)}

      <Form className="mt-10" method="PUT">
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Product Name:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Example: Mouse Logitech Master Series MX"
            name="name"
            defaultValue={product.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Price:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Example: 200, 300"
            name="price"
            defaultValue={product.price}
          />
        </div>
        <input
          type="submit"
          className="p-2 bg-blue-700 text-sm uppercase cursor-pointer text-white font-bold rounded-md hover:bg-blue-800 transition-colors"
          value="UpdateProduct"
        />
      </Form>
    </>
  );
}
