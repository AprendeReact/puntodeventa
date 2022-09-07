import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarMenu } from './NavbarMenu'


function HomePage() {
  return (
    <div>
      <NavbarMenu />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-4'>
            <Link to='/pos' className='btn btn-primary'>Abrir punto de venta</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage