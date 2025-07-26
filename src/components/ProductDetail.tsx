import type { ProductType } from "../types";
import { formatCurrency } from "../utils";
import { useNavigate } from "react-router-dom";

type Props = {
  product: ProductType;
};

export default function ProductDetail({ product }: Props) {
  const { id, name, price, availability } = product;
  const isAvailable = availability ? "Available" : "Unavailable ";
  const navigate = useNavigate();

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{name}</td>
      <td className="p-3 text-lg text-gray-800">{formatCurrency(price)}</td>
      <td className="p-3 text-lg text-gray-800">{isAvailable}</td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
          <button 
          className="p-2 bg-blue-700 text-sm uppercase cursor-pointer text-white font-bold rounded-md hover:bg-blue-800 transition-colors"
          onClick={ () => navigate(`/products/${id}/edit`)}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
