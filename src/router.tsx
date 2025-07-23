import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts'
import { NewProduct, Products } from './views'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Products/>,
                index: true
            },
            {
                element: <NewProduct/>,
                path: '/products/new'
            }
        ]
    }
])