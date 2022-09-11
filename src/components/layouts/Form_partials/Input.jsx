import React from 'react'

export const Input = ({ type, label, name_data }) => {
  return (
    <>
      <div className="mb-3">
        <label  className="form-label">{label}</label>
        <input type={type} className="form-control" id="" name={name_data} />
      </div>
    </>
  )
}
