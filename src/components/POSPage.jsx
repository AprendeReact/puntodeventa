import React, { useEffect, useRef, useState } from 'react'
import { NavbarMenu } from './NavbarMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ComponentToPrint } from './print/ComponentToPrint'
import { useReactToPrint } from 'react-to-print';
import '../styles/_productsGrid.scss';

function POSPage() {
  //define useState
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuatity, setTotalQuatity] = useState(0);
  const divCartRef = useRef(null);

  // toast notifications config
  const toastOption = {
    autoClose: 1000,
    pauseOnOver: true,
    position: "bottom-right",
    hideProgressBar: true
  }

  // Get products from API REST
  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await axios.get(process.env.REACT_APP_API + 'products');
    setProducts(result.data);
    setIsLoading(false);
  }

  //Function add product to cart 
  const addProductToCart = async (product) => {
    console.log(product);

    let findProductCart = await cart.find(i => {
      return i.id === product.id
    });

    if (findProductCart) {
      let newCart = [];
      let newItem;
      cart.forEach(cartItem => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1)
          }
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
 
      });

      setCart(newCart);
      toast.success(`Se agregó ${newItem.name}`, toastOption);
    } else {
      let addingProduct = {
        ...product,
        'quantity': 1,
        'totalAmount': product.price,
      }
      setCart([...cart, addingProduct]);
      toast.success(`Se agregó ${product.name}`, toastOption);

    }
  }

  //Define content to window print
  const componentReference = useRef();
  const handleReactToPrint = useReactToPrint({
    content: () => componentReference.current,
  });
  const printNote = () => {
    handleReactToPrint();
  }
  const clearCart = () => {
    setCart([]);
    toast.info("Se ha limpiado la orden.", toastOption);

  }

  //Invoque function get products from API REST 
  useEffect(() => {
    fetchProducts();
  }, []);

  // Update when change products array
  useEffect(() => {
    console.log(products);
  }, [products]);

  // Update when change cart array
  useEffect(() => {
    let newTotalAmount = 0;
    let newTotalQuatity = 0;
    cart.forEach(icart => {
      newTotalAmount = newTotalAmount + parseInt(icart.totalAmount);
    });
    setTotalAmount(newTotalAmount);
    scrollToBottom();

    cart.forEach(icart => {
      newTotalQuatity = newTotalQuatity + parseInt(icart.quantity);
    });
    setTotalQuatity(newTotalQuatity);
  }, [cart]);

  //Remove product from cart
  const removeProduct = async (product) => {
    const newCart = cart.filter(cartItem => cartItem.id !== product.id);
    setCart(newCart);
  }

  const scrollToBottom = () => {
    divCartRef.current.scrollIntoView({ behavior: "smooth" })
    console.log(divCartRef);
  }
  return (
    <div>
      <NavbarMenu />
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-8 productsGrid'>
            <ToastContainer />
            {isLoading ? 'Cargando...' : <div className='row'>
              {products.map((product, key) =>
                product.name ?
                  <div key={key} className='col-lg-3 col-4'>
                    <div className='border item_box px-1 my-3 text-center' onClick={() => addProductToCart(product)}>
                      <p className='m-3'>{product.name}</p>
                      <img src={product.image} className='img-fluid' alt="{product.name}" />
                      <p className='m-3'>${product.price}</p>
                    </div>
                  </div>

                  : ""
              )}
            </div>
            }

          </div>

          <div className='col-lg-4 orderGrid' >
            <div style={{ display: "none" }}>
              <ComponentToPrint cart={cart} totalAmount={totalAmount} ref={componentReference} />
            </div>
            <div className=''>
              <table className='table table-responsive table-hover'>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Producto</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                    <td>Total</td>
                    <td>

                      {totalAmount !== 0 ?
                        <div>

                          <button className='btn btn-danger' title="Borrar todo" onClick={clearCart}><FontAwesomeIcon icon={faClose} /></button>

                        </div>
                        : ''
                      }

                    </td>
                  </tr>
                </thead>
                <tbody>
                  {cart ? cart.map((cartProduct, key) => <tr key={key}>
                    <td>{cartProduct.id}</td>
                    <td>{cartProduct.name}</td>
                    <td>${cartProduct.price}</td>
                    <td>{cartProduct.quantity}</td>
                    <td>${cartProduct.totalAmount}</td>
                    <td>
                      <button className='btn btn-danger remove-button' onClick={() => removeProduct(cartProduct)}><FontAwesomeIcon icon={faTrash} /></button>
                    </td>

                  </tr>)
                    : <tr><td>Orden vacía.</td></tr>

                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="6">
                      <div className='w-100'>
                        <h3 className='px-2  text-center'>Artículos {totalQuatity}</h3>
                        <h2 className='px-2  text-center'>Total: ${totalAmount}</h2>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
              {totalAmount !== 0 ?
                <div className='w-100'>
                  <div className='text-center'>
                    <button className='btn print-button mb-5' onClick={printNote}>
                      Imprimir oden
                    </button>
                  </div>
                </div>
                : ''
              }
            </div>

            <div ref={divCartRef} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default POSPage