import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { Modal } from 'bootstrap'


import FormNewProduct from './FormNewProduct'


const ModalTemplate = forwardRef((props, ref) => {
  let data_form = null;
  const modalRef = useRef()
  const hideModal = () => {
    const modalEle = modalRef.current
    const bsModal = Modal.getInstance(modalEle)
    bsModal.hide()
  }


  useImperativeHandle(ref, () => ({

    showModal(props) {
      const modalEle = modalRef.current
      const bsModal = new Modal(modalEle, {
        backdrop: 'static',
        keyboard: false
      })
      bsModal.show();
      data_form = props;
    }
  }));



  const modal_content = function (type) {

    switch (type) {
      case "form_new_product":
        return <FormNewProduct data_form={data_form} />;

      case "form_update_product":
        return <FormNewProduct />;

      default:
        break;
    }

  };
  return (
    <>
      <div className="modal fade" ref={modalRef} tabIndex="-1" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{props.modal_title}</h5>
              <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {modal_content(props.type)}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={hideModal}>Cerrar</button>
              <button type="button" className="btn btn-primary">{props.label_accept}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
)
export default ModalTemplate