import React, { useRef } from 'react'
import GetProductsGrid from './GetProductsGrid';
import ModalTemplate from './layouts/ModalTemplate'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Inventory = () => {
  const childRef = useRef();

  const viewDetailProduct = async (product) => {
    console.log(product)
    childRef.current.showModal(product);
  }

   
  const openModal = async () => { 
    childRef.current.showModal();
  }
  return (
    <>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-12 '>
          <button className='btn btn-primary' onClick={openModal}><FontAwesomeIcon icon={faPlus} /> Nuevo producto</button>

            <ModalTemplate ref={childRef} modal_title="Nuevo Producto" type="form_new_product" label_accept="Guardar" />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-lg-12 productsGrid'>
            <GetProductsGrid action={viewDetailProduct} show_price={false} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Inventory