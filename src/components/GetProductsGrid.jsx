import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ItemProduct } from './layouts/ItemProduct';

const GetProductsGrid = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const action = props.action;

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
        <ItemProduct products={products} action={action} />
      </div>
      }
    </>
  )
}

export default GetProductsGrid 