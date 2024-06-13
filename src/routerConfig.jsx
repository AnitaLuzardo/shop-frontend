import React from 'react';

export const Home = React.lazy(()=> import ('./modules/sessionsHome/screens/Home'));
export const Products = React.lazy(()=> import ('./modules/products/screens/Products'));
export const ShoppingCart = React.lazy(() => import ('./modules/shoppingCarts/screens/ShoppingCart'));
export const Product = React.lazy(() => import ('./modules/products/screens/DetailProduct'));


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
    path: '/detail/:id',
    name: 'Product Detail',
    Component: Product
  },
	{
		path: '/cart',
		name: 'Shopping Cart',
		Component: ShoppingCart
	}
]

export default routes;