import React from 'react'
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../redux/productsDuck'


const Orders = () => {


  const dispatch = useDispatch();
  const products_data = useSelector(store => store.dataProducts.array);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  console.log(products_data);
  return (
    <div>Orders

    </div>
  )
}

export default Orders