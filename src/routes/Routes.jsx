import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/home/Home'
import SingleProduct from '../pages/product/SingleProduct'
import FilterCategory from '../pages/shop/FilterCategory'


const router = createBrowserRouter([
    // User Router
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/product",
                element: <SingleProduct/>
            },
            {
                path: "/filter/:category",
                element: <FilterCategory /> // Add route for filtering by category
            },
            {
                path: "/filter/:category/:subcategory",
                element: <FilterCategory /> // Add route for filtering by category and subcategory
            }
           
        ]
    }
])

export default  router
