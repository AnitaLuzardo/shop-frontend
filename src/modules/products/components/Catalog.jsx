import React, { useEffect } from 'react';
// import { getUserslist } from '../../../Redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { getProductslist } from '../../../Redux/actions/products';
import catalogStyle from '../styles/catalog.module.css'


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
    <div className={catalogStyle.container}>Catalog</div>
  )
}

export default Catalog