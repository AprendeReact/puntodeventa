import React, { useEffect, useState } from 'react'
import { ItemProduct } from './layouts/ItemProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../redux/productsDuck'

const GetProductsGrid = (props) => {

  const dispatch = useDispatch();
  const products_data = useSelector(store => store.dataProducts.array);
  const [isLoading, setIsLoading] = useState(false);
  const action = props.action;
  const show_price = props.show_price;

  // Get products from store redux
  const fetchProducts = async () => {
    setIsLoading(true);
    dispatch(getProductsAction());
    setIsLoading(false);
  }


  //Invoque function get products  
  useEffect(() => {
    fetchProducts();
  }, []);
  // Update when change products array
  useEffect(() => {
    console.log(products_data);
  }, [products_data]);

  return (
    <>
      {isLoading ? 'Cargando...' : <div className='row'>
        <ItemProduct products={products_data} action={action} show_price={show_price} />
      </div>
      }
    </>
  )
}

export default GetProductsGrid 