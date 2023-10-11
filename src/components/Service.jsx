/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Service.css"

function Service({ img , title , description }) {
  return (
    <>
        <div className="service col-12 col-sm-6 col-lg-3  mb-5 mb-lg-0 d-flex align-items-center  gap-15">
            <img  className='img-fluid' src={`images/${img}`} />
            <div className="content">
                <h5 className='mb-0'>{title}</h5>
                <p className='mb-0'>{description}</p>
            </div>
        </div>
    </>
  )
}

export default Service
