import { Link } from "react-router-dom";

export default function Products() {
  return (
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
  );
}
