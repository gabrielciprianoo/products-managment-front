import { ProductDetail } from "."
import type { ProductType } from "../types"

type Props = { 
    products : ProductType[]
}

export default function ProductsTable( { products} : Props) {
  return (
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
  )
}
