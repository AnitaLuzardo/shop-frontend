import { Home, Products, ShoppingCart } from "./pages";

export const routes = [
    {
			path: '/',
			element: <Home /> 
    },
    {
      path: '/products',
			element: <Products />
    },
		{
			path: '/cart',
			element: <ShoppingCart />
		}
]