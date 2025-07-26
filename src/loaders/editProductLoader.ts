import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import { getProductByID } from "../services";


export const loader = async ( { params } : LoaderFunctionArgs) => {
  try {
    const id = params.id 

    if( !id ) { return }

    const product = await getProductByID(Number(id));

    if(!product) { 
        return redirect('/')
    }

    return product
    
  } catch (error) {
    console.log(error)
  }
};
