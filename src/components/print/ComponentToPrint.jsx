import React from 'react';
import Moment from 'moment';

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { cart, totalAmount } = props;
  const date = new Date();

  return (
    <div ref={ref}>
      <div className='container text-center'>
        <div className='row mt-3'>
          <div className='col-lg-12 '>
            <p>
              {Moment(date).format('DD/MM/YYYY h:mm A')}
            </p>
            <table className='table  table-print'>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Producto</td>
                  <td>Precio</td>
                  <td>Cantidad</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {cart ? cart.map((cartProduct, key) => <tr key={key}>
                  <td>{cartProduct.id}</td>
                  <td>{cartProduct.name}</td>
                  <td>{cartProduct.price}</td>
                  <td>{cartProduct.quantity}</td>
                  <td>{cartProduct.totalAmount}</td>


                </tr>)
                  : ""

                }
              </tbody>
            </table>
            <h2 className='m-5'>Total: ${totalAmount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
});