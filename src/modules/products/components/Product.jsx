import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductID } from '../../../Redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import StyleDetail from '../styles/detail.module.css'

const Product = () => {
  const paramans = useParams();
  const dispatch = useDispatch();
  const product = useSelector( state => state.product.product);
  const [loading, setLoading] = useState(true);

  // console.log('==>', product)

  useEffect(() => {
    setLoading(true);
    getProductID(dispatch, paramans.id).then(() => {
      setLoading(false)
    })
  },[])

  if (loading) {
    return <div className='flex justify-center items-center text-3xl'>Loading...</div>;
    console.log('Loading...', loading)
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // if (!product) {
  //   return null
  // }

  return (
    <div className = {StyleDetail.containerDtl}>
      <img src={product.images[0].url} alt={product.name} className= {StyleDetail.imgDetail} />
      <div className={StyleDetail.infProduct}>
        <div className={`flex justify-between items-center ${StyleDetail.borderBottom}`}>
          <h1 className='font-bold text-3xl text-slate-400'>{product.name}</h1>
          <p className='font-bold'>{product.price}$</p>
          {/* <hr /> */}
        </div>
        <p>{product.description}</p>
        <div className='flex justify-center'>
          <button className={`bg-indigo-600 mt-8 text-white py-1 px-4 rounded hover:bg-indigo-800 
            duration-500 ${StyleDetail.buttonCart}`}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product