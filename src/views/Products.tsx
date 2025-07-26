import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ProductDetail } from "../components";
import type { ProductType } from "../types";

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
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map( product => (
              <ProductDetail product={product} key={product.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
