/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Category.css"

function Category({ img, title, numOfItems }) {
  return (
    <>
      <div className="content d-flex align-items-center">
        <div>
          <h6>{title}</h6>
          <p>{numOfItems} Items</p>
        </div>
        <img src={`images/${img}`} />
      </div>
    </>
  )
}

export default Category
