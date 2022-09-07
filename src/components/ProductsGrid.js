import React, { useEffect, useState } from 'react'
import { ItemProduct } from './ItemProduct'

export const ProductsGrid = ({addItemCart}) => {
   //Define constants
   const [productsList, setProducts] = useState([]);
   const [loader_indicator, setLoader_indicator] = useState(true);

   // get product from API
   const getProductsAjaxPromise = () => {
      fetch("https://reqres.in/api/users?page=2")
         .then(respuesta => respuesta.json())
         .then(resultado => {
            setProducts(resultado.data);
            setLoader_indicator(false);
         },
            error => {
               console.log(error);
            })
   }

   //Use effect blocks
   useEffect(() => {
      getProductsAjaxPromise();
   }, []);


   //Loader
   if (loader_indicator == true) {
      return (
         <div>
            Cargando datos...
         </div>
      );
   } else {
      //render 
      return (
         <div className='productsGrid p-3'>
            <div className='row'>

               {
                  productsList.map(product => {
                     return <div className='col-12 col-md-3' key={product.id}>
                        <ItemProduct
                           id_product={product.id}
                           title_product={product.first_name}
                           url_image={product.avatar}
                           addItemCart={addItemCart} />
                     </div>
                  })

               }

            </div>
         </div>
      )
   }
}
