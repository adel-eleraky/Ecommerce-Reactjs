/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./css/SpecialProduct.css"

function SpecialProduct() {
    return (
        <>
            <div className="special-product border p-3 d-flex rounded" data-aos="fade-up" data-aos-duration="1000">
                <div className="image w-50 position-relative">
                    <span className="badge text-bg-warning position-absolute">-25%</span>
                    <img src="/images/laptop.jpg" alt="" className="img-fluid w-100" />
                    <img src="/images/laptop.jpg" alt="" className="img-fluid w-50" />
                    <img src="/images/laptop.jpg" alt="" className="img-fluid w-50" />
                </div>
                <div className="content w-50 ps-3">
                    <div className="brand mb-2">Bejaj</div>
                    <h6 className="title">Beoplay A1 Portable Bluetooth Speaker</h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <div className="price mb-3"><span >$500</span> <strike>$400</strike> </div>
                    <div className="countdown mb-3"> 425 <span className='fw-light'> days</span> <span className="badge text-bg-danger p-1">13</span> : <span className="badge text-bg-danger p-1">00</span> : <span className="badge text-bg-danger p-1">00</span></div>
                    <div className="quantity mb-3">
                        <span className='d-block mb-2'>Products : 52</span>
                        <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "4px" }}>
                            <div className="progress-bar" style={{ width: "25%" }}></div>
                        </div>
                    </div>
                    <button className="btn btn-secondary">OPTION</button>
                </div>
            </div>
        </>
    )
}

export default SpecialProduct
