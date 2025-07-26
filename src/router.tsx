import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts'
import { NewProduct, Products } from './views'
import { action } from './actions'
import { loader as productLoader} from './loaders/productsLoader'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Products/>,
                index: true,
                loader: productLoader
            },
            {
                element: <NewProduct/>,
                path: '/products/new',
                action: action
            }
        ]
    }
])