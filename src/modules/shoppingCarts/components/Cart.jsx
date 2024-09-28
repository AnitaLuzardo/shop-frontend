import React, { useReducer, useState } from 'react';
import cartStyle from '../styles/cart.module.css';
import imgShopping from '../../../components/utils/shopping.jpg'
// import { shopReducer, shopInitialState } from '../../../Redux/reducers/shopReducer';

const Cart = () => {

  const [count, setCount] = useState(0);

  // const [state, dispatch] = useReducer(shopReducer, shopInitialState);

  // const { productsCart, cart } = state;

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
		<div className={cartStyle.containerForm}>
			<div className={`${cartStyle.content}`}>
				<section className={` flex justify-center items-center mt-10 ${cartStyle.box}`}>
          <div className='flex justify-center items-center'>
            <img src={imgShopping} alt="" className={cartStyle.imgCart}/>
            <h4 className='m-2 text-slate-600 font-bold'>Product Name</h4>
          </div>
          <div className='flex justify-center items-center m-4'>
            <button onClick={decrementCount} className={cartStyle.buttonShop}>
              -
            </button>
            <p className={`m-2 ${cartStyle.count}`} >{count}</p>
            <button onClick={incrementCount} className={cartStyle.buttonShop}>
              +
            </button>
            <div className='flex justify-between items-center'>
              <div className='m-4'>
                <h3 className='text-xs'>Price</h3>
                <p>20$</p>
              </div>
              <div>
                <h3 className='text-xs'>
                  Total
                </h3>
                <p>110$</p>
              </div>
            </div>
          </div>
				</section>
        <section className={`${cartStyle.order}`}>
          <h2 className='text-center mt-6 mb-4 text-slate-600 font-bold'>Order Sumary</h2>
          <div className={cartStyle.containerShop}>
            <div className={cartStyle.amount}>
              <p>12 items</p>
              <p>120$</p>
            </div>
            <div className='w-80'>
              <h2 className={`mt-2 text-center ${cartStyle.discountsTitle}`}>DISCOUNTS</h2>
              <div className='flex flex-col justify-center'>
                <div className={`flex justify-between m-6 ${cartStyle.discountsCart}`}>
                  <h3>2x1 Mug Offer</h3>
                  <span>-10$</span>
                </div>
                <div className='flex justify-between m-6'>
                  <span>TOTAL COST</span>
                  <span>107$</span>
                </div>
                <div className='flex justify-center items-center'>
                  <button className={`bg-indigo-600 text-white w-72 mb-10 text-sm py-1 px-4 rounded 
                  hover:bg-indigo-800 duration-500 ${cartStyle.buttonCheckount}`}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    	</div>
		</div>
  )
}

export default Cart