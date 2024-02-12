/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import StoreSidebar from '../components/StoreSidebar'
import "./css/Store.css"
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import ProductsFeatures from '../utils/ProductsFeatures';


function Store() {

    const products = useSelector(state => state.products).products
    const categories = useSelector(state => state.categories)
    const { category } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const rating = searchParams.get("rating")
    const priceFrom = searchParams.get("priceFrom")
    const priceTo = searchParams.get("priceTo")

    const handleSearchParams = (name, value) => {

        const newSearchParams = new URLSearchParams(searchParams.toString())
        newSearchParams.set(name, value)
        setSearchParams(newSearchParams)
    }

    const reactStarElements = []
    for (let i = 1; i <= 5; i++) {

        reactStarElements.push(
            <div key={i} className='rating-element' onClick={() => handleSearchParams("rating", i)}>
                <ReactStars count={5} size={24} value={i} edit={false} activeColor="#ffd700" />
            </div>
        )
    }

    const filteredProducts = products && new ProductsFeatures(products)

    const productsElement = filteredProducts.filterByCategory(category).filterByRating(rating).filterByPrice(priceFrom, priceTo).createProductsElement()

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
                                        {categories && categories.map((category, index) => {
                                            return (
                                                <li className="category-item " key={index}>
                                                    <Link to={`/products/${category}`} className="d-block text-dark ps-3 mb-2 fw-bold">{category}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="filter  bg-white rounded p-3 mb-3">
                                    <h5 className='mb-4'>Filter By</h5>
                                    <div className="price py-3 ms-2 mb-3 border-top border-3">
                                        <h6 className='mb-3'>Price</h6>
                                        <div className="inputs">
                                            <input type="number" name="priceFrom" className="form-control mb-2" placeholder="From" onChange={(e) => handleSearchParams(e.target.name, e.target.value)} />
                                            <input type="number" name="priceTo" className="form-control" placeholder="To" onChange={(e) => handleSearchParams(e.target.name, e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="rating py-3 ms-2 mb-3 border-top border-3">
                                        <h6 className='mb-3'>Rating</h6>
                                        <div className="ratings">
                                            {reactStarElements}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="sidebar-column col-3 col-lg-3">
                        <StoreSidebar />
                    </div>
                    <div className="products-list-column col-9 col-lg-9">
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
                                <h6 className='mb-0'>{productsElement.length} product</h6>
                            </div>
                            <div className="products-list">
                                <div className="row">
                                    {productsElement.length != 0 ? productsElement : <div className='fw-bold fs-5 text-center'>No Products Found</div>}
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
