import React from 'react'
import { NavLink } from 'react-router-dom'
import { ItemMenu } from './layouts/ItemMenu'

export const NavbarMenu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Comandas</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <ItemMenu link="/pos" label="Punto de venta" />
              <ItemMenu link="/inventario" label="Inventario" />
              <ItemMenu link="/orders" label="Órdenes" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
