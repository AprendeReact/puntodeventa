import React from 'react'
import { NavLink } from 'react-router-dom'


function HomePage() {
  return (
    <div>
      
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-4'>
            <NavLink to='/pos' className='btn btn-primary'>Abrir punto de venta</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage