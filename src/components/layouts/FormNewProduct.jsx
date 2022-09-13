import React from 'react'
import { Input } from './Form_partials/Input'

const FormNewProduct = () => {

  const sendData = e => {
    e.preventDefault();
    let dataForm = {
      name_product: e.target.name_product.value,
      description: e.target.description.value,
      price: e.target.price.value,
      stock: e.target.stock.value
    }

    console.log(dataForm)
  }
  return (
    <div>
      <form onSubmit={sendData}>
        <Input type="text" name_data="name_product" label="Nombre" />
        <Input type="text" name_data="description" label="Descripción" />
        <Input type="number" name_data="price" label="Precio" />
        <Input type="text" name_data="stock" label="Stock" />

        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}

export default FormNewProduct