import React from 'react'
import GetProductsGrid from './GetProductsGrid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Inventory = () => {

  const viewDetailProduct = () => {
    alert()
  }
  return (
    <>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-12 '>
            <button className='btn btn-primary'><FontAwesomeIcon icon={faPlus} /> Nuevo producto</button>

          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-lg-12 productsGrid'>
            <GetProductsGrid action={viewDetailProduct} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Inventory