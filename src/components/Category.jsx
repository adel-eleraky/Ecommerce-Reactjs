/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Category.css"

function Category({ img, title, numOfItems }) {
  return (
    <>
      <div className="category content d-flex flex-column justify-content-between align-items-center  mx-5">
        <img src={`/images/${img}`} className='img-fluid'/>
        <div>
          <h6>{title}</h6>
        </div>
      </div>
    </>
  )
}

export default Category
