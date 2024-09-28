import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductID } from '../../../Redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import StyleDetail from '../styles/detail.module.css';
import { addToCart } from '../../../Redux/actions/shopAction';
import * as jwt_decode from 'jwt-decode';

const Product = () => {
  const paramans = useParams();
  const dispatch = useDispatch();
  const product = useSelector( state => state.product.product);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  // console.log('==>', product)
  console.log('TOKEN ===>>>', token)

  useEffect(() => {
    setLoading(true);
    getProductID(dispatch, paramans.id).then(() => {
      setLoading(false)
    })
    
  },[])

  if (loading) {
    return <div className='flex justify-center items-center text-3xl h-52'>Loading...</div>;
    // console.log('Loading...', loading)
  }

  if (!product) {
    return <div className='flex justify-center items-center text-3xl h-52'>Product not found</div>;
  }

  // if (!product) {
  //   return null
  // }

  const handleAddToCart = () => {
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);

        const userId = decodedToken.userId; 
        console.log(userId);
      } catch (error) {
        console.error('Token inválido', error);
      }
    }

    dispatch(addToCart(product));
    console.log('Producto añadido al carrito:', product);
    console.log('Fecha ==>>', new Date());
  };

  return (
    <div className = {StyleDetail.containerDtl}>
      <img src={product.images[0].url} alt={product.name} className= {`mt-20 ${StyleDetail.imgDetail}`} />
      <div className={StyleDetail.infProduct}>
        <div className={`flex justify-between items-center ${StyleDetail.borderBottom}`}>
          <h1 className='font-bold text-3xl text-slate-400'>{product.name}</h1>
          <p className='font-bold'>{product.price}$</p>
        </div>
        <p>{product.description}</p>
        <div className='flex justify-center'>
          <button className={`bg-indigo-600 mt-8 text-white py-1 px-4 rounded hover:bg-indigo-800 
            duration-500 ${StyleDetail.buttonCart}`}
            onClick={handleAddToCart }  
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product