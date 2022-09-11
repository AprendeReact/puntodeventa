import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemMenu = (props) => {


  return (
    <>
      <li className="nav-item">
        <NavLink to={props.link} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page">{props.label}</NavLink>
      </li>
    </>
  )
}
