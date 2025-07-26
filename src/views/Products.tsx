import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import type { ProductType } from "../types";
import { ProductsTable } from "../components";

export default function Products() {
  const products = useLoaderData() as ProductType[];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <h1 className="text-2xl font-medium text-gray-900">Products</h1>
        <Link
          to="/products/new"
          className="p-2 bg-blue-700 text-sm uppercase cursor-pointer text-white font-bold rounded-md hover:bg-blue-800 transition-colors"
        >
          {" "}
          Add Product
        </Link>
      </div>

      <div className="p-2">
        {products.length > 0 ? (
          <ProductsTable products={products} />
        ) : (
          <div className="flex justify-center py-4">
            <p className="text-gray-400">Products List is empty, please add your fisrt product</p>
          </div>
        )}
      </div>
    </>
  );
}
