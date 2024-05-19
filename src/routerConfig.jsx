import React from 'react';

export const Home = React.lazy(()=> import ('./modules/sessionsHome/screens/Home'));
export const Products = React.lazy(()=> import ('./modules/products/screens/products'));
export const ShoppingCart = React.lazy(() => import ('./modules/shoppingCarts/screens/ShoppingCart'))


const routes = [
	{
		path: '/',
		name: 'Home',
		Component: Home
	},
	{
		path: '/products',
		name: 'Products',
		Component: Products
	},
	{
		path: '/cart',
		name: 'Shopping Cart',
		Component: ShoppingCart
	}
]

export default routes;