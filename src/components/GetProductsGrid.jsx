import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ItemProduct } from './layouts/ItemProduct';

const GetProductsGrid = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const action = props.action;
  const show_price = props.show_price;

  // Get products from API REST
  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await axios.get(process.env.REACT_APP_API + 'products');
    setProducts(result.data);
    setIsLoading(false);
  }

  
  //Invoque function get products from API REST 
  useEffect(() => {
    fetchProducts();
  }, []);
  // Update when change products array
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      {isLoading ? 'Cargando...' : <div className='row'>
        <ItemProduct products={products} action={action} show_price={show_price}/>
      </div>
      }
    </>
  )
}

export default GetProductsGrid 