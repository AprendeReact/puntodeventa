import React from 'react'

export const ItemProduct = (props) => {

const action = props.action;
  return (
    <>
      {props.products.map((product, key) =>
        product.name ?
          <div key={key} className='col-lg-3 col-4'>
            <div className='border item_box px-1 my-3 text-center' onClick={() => action(product)}>
              <p className='m-3'>{product.name}</p>
              <img src={product.image} className='img-fluid' alt="{product.name}" />
              <p className='m-3'>${product.price}</p>
            </div>
          </div>

          : ""
      )}
    </>
  )
}
