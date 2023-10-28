/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import StoreSidebar from '../components/StoreSidebar'
import "./css/Store.css"
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component';


function Store() {

    return (
        <>
            <div className="container py-5" >
                <div className="row" >
                    <div className="main-filter dropdown mb-4 ">
                        <button className="btn btn-secondary btn-lg w-25 dropdown-toggle bg-white text-dark border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filters
                        </button>
                        <ul className="dropdown-menu w-50">
                            <li>
                                <div className="categories bg-white rounded p-3 mb-3">
                                    <h5 className='mb-3'>Shop By Categories</h5>
                                    <ul className="list-unstyled">
                                        <li className='mb-2 ms-2 fw-light fs-5'>mobiles</li>
                                        <li className='mb-2 ms-2 fw-light fs-5'>mobiles</li>
                                        <li className='mb-2 ms-2 fw-light fs-5'>mobiles</li>
                                        <li className='mb-2 ms-2 fw-light fs-5'>mobiles</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="filter  bg-white rounded p-3 mb-3">
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
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="sidebar-column col-4 col-lg-3">
                        <StoreSidebar />
                    </div>
                    <div className="products-list-column col-8 col-lg-9">
                        <div className="main-content bg-white rounded p-3">
                            <div className="heading mb-4 d-flex align-items-center">
                                <h6 className='mb-0 me-3'>Sort By: </h6>
                                <select className="form-select w-25 me-auto" aria-label="Default select example">
                                    <option >Open this select menu</option>
                                    <option value="1">Alphabetically, A-Z</option>
                                    <option value="1">Alphabetically, Z-A</option>
                                    <option value="2">Price, high to low</option>
                                    <option value="2">Price, low to high</option>
                                    <option value="3">Created, old to new</option>
                                    <option value="3">Created, new to old</option>
                                </select>
                                <h6 className='mb-0'>20 product</h6>
                            </div>
                            <div className="products-list">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <ProductCard />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <ProductCard />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <ProductCard />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <ProductCard />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <ProductCard />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <ProductCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store
