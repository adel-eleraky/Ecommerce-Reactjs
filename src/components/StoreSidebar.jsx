/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/StoreSidebar.css"
import ReactStars from 'react-rating-stars-component';

function StoreSidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="categories bg-white rounded p-3 mb-3">
                    <h5 className='mb-3'>Shop By Categories</h5>
                    <ul className="list-unstyled">
                        <li className='mb-2 ms-2 fw-light fs-5'>mobiles</li>
                        <li className='mb-2 ms-2 fw-light fs-5'>mobiles</li>
                        <li className='mb-2 ms-2 fw-light fs-5'>mobiles</li>
                        <li className='mb-2 ms-2 fw-light fs-5'>mobiles</li>
                    </ul>
                </div>
                <div className="sidebar-filter  bg-white rounded p-3 mb-3">
                    <h5 className='mb-4'>Filter By</h5>
                    <div className="Availability py-3 ms-2 mb-3 border-top border-3">
                        <h6 className='mb-3'>Availability</h6>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Checked checkbox
                            </label>
                        </div>
                    </div>
                    <div className="price py-3 ms-2 mb-3 border-top border-3">
                        <h6 className='mb-3'>Price</h6>
                        <div className="inputs d-flex justify-content-between gap-15">
                            <input type="number" className="form-control" placeholder="From" />
                            <input type="number" className="form-control" placeholder="To" />
                        </div>
                    </div>
                    <div className="brand py-3 ms-2 mb-3 border-top border-3">
                        <h6 className='mb-3'>Product Brand</h6>
                        <div className="brands d-flex flex-wrap gap-15">
                            <span className='bg-secondary-subtle fw-normal py-1 px-2 rounded'>Apple</span>
                            <span className='bg-secondary-subtle fw-normal py-1 px-2 rounded'>Redragon</span>
                            <span className='bg-secondary-subtle fw-normal py-1 px-2 rounded'>Razer</span>
                            <span className='bg-secondary-subtle fw-normal py-1 px-2 rounded'>COSRX</span>
                            <span className='bg-secondary-subtle fw-normal py-1 px-2 rounded'>SHARPIE</span>
                            <span className='bg-secondary-subtle fw-normal py-1 px-2 rounded'>Apple</span>
                        </div>
                    </div>
                    <div className="rating py-3 ms-2 mb-3 border-top border-3">
                        <h6 className='mb-3'>Rating</h6>
                        <div className="ratings">
                            <ReactStars count={5} size={24} value={1} edit={false} activeColor="#ffd700" />
                            <ReactStars count={5} size={24} value={2} edit={false} activeColor="#ffd700" />
                            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                            <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreSidebar
