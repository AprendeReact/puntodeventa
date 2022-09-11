import React, { useRef } from 'react'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GetProductsGrid from './GetProductsGrid';
import { Modal } from 'bootstrap'

const Inventory = () => {
  const viewDetailProduct = () => {
    alert()
  } 


  const modalRef = useRef()

  const showModal = () => {
    const modalEle = modalRef.current
    const bsModal = new Modal(modalEle, {
      backdrop: 'static',
      keyboard: false
    })
    bsModal.show()
  }
  const hideModal = () => {
    const modalEle = modalRef.current
    const bsModal = Modal.getInstance(modalEle)
    bsModal.hide()
  }




  return (
    <>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-12 '>
            <button className='btn btn-primary' onClick={showModal}><FontAwesomeIcon icon={faPlus} /> Nuevo producto</button>

          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-lg-12 productsGrid'>
            <GetProductsGrid action={viewDetailProduct} />
           </div>
        </div>
      </div>
      <div className="modal fade" ref={modalRef} tabIndex="-1" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Nuevo</h5>
              <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={hideModal}>Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Inventory