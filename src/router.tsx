import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts'
import { NewProduct, Products } from './views'
import { action } from './actions'

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
                path: '/products/new',
                action: action
            }
        ]
    }
])