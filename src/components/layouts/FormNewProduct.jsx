import React from 'react'
import { Input } from './Form_partials/Input'

const FormNewProduct = () => {
  return (
    <div>
      <form>
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