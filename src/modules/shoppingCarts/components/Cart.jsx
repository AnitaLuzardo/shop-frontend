import React from 'react';
import cartStyle from '../styles/cart.module.css'

const Cart = () => {
  return (
		<div className={cartStyle.containerForm}>
			<div className={`${cartStyle.content}`}>
				<h2 className='text-slate-300 text-5xl'>Shopping Cart</h2>
				<h3>Products</h3>
				<article className={cartStyle.box}>

				</article>
				<h3>Cart</h3>
				<article className={cartStyle.box}>

				</article>
    	</div>
		</div>
  )
}

export default Cart