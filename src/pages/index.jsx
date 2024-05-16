import React from 'react';
import Home from '../modules/sessionsHome/screens/Home';

export { Home }

export const Products = React.lazy(() => import('../modules/products/screens'));

export const ShoppingCart = React.lazy(() => import('../modules/shoppingCarts/screens/ShoppingCart'))