import React, { useEffect } from 'react';
// import { getUserslist } from '../../../Redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { getProductslist } from '../../../Redux/actions/products';
import catalogStyle from '../styles/catalog.module.css';
import imgTest from "../../../components/utils/shopping.jpg"
import { Link } from 'react-router-dom';


const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  // const users = useSelector(state => state.users.users);
 

  console.log('list Products', products)

  // console.log('List', users);

  useEffect(() => {
    getProductslist(dispatch)
    // getUserslist(dispatch)
  }, [])

  return (
    <div className={catalogStyle.container}>
      <h1 className={`pt-2 font-bold text-2xl text-slate-300 mt-5 ${catalogStyle.titleProducts }`}>All PRODUCTS</h1>
      <div className={catalogStyle.productStyle}>
      {products.map((product) =>{
          const imageUrl = product.images && product.images.length > 0 ? product.images[0].url 
          : 'default-image-url.jpg';
          return (
            <div className={catalogStyle.containerProd} key={product.id}>
              <div>
                <img src={imageUrl} alt="" className={catalogStyle.imgProduct}/>
              </div>
              <div className={catalogStyle.infProduct}>
                <h2>{product.name}</h2>
                {/* <p>{product.description}</p> */}
                <p>{product.price}$</p>
                <Link to={`/detail/${product.id}`} className={`bg-indigo-600 text-white text-sm py-1 px-4 rounded 
                hover:bg-indigo-800 duration-500 ${catalogStyle.button_login}`}>
                  See
                </Link>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Catalog