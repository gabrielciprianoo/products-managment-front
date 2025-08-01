import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts'
import { EditProduct, NewProduct, Products } from './views'
import { loader as productLoader } from './loaders/productsLoader'
import { addProductAction, deleteProductAction, updateAvailability, updateProductAction } from './actions'
import { loader as editProductLoader } from './loaders/editProductLoader'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Products/>,
                index: true,
                loader: productLoader,
                action: updateAvailability
            },
            {
                element: <NewProduct/>,
                path: '/products/new',
                action: addProductAction
            },
            {
                element: <EditProduct/>,
                path: '/products/:id/edit',
                action: updateProductAction,
                loader: editProductLoader
            }
            ,
            {
                path: '/products/:id/delete',
                action: deleteProductAction,
            }
            
        ]
    }
])