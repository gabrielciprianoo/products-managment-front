import type { ProductType } from "../types"
import { formatCurrency } from "../utils"

type Props = { 
    product: ProductType
}

export default function ProductDetail( { product } : Props) {
    
    const { name, price, availability} = product
    const isAvailable = availability ? 'Available' : 'Unavailable '
  return (
    <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">
            { name }
        </td>
        <td className="p-3 text-lg text-gray-800">
            { formatCurrency(price) }
        </td>
        <td className="p-3 text-lg text-gray-800">
            { isAvailable }
        </td>
        <td className="p-3 text-lg text-gray-800 ">
            
        </td>
    </tr> 
  )
}
