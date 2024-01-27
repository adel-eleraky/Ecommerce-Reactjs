/* eslint-disable no-unused-vars */
import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./css/ProductCard.css"
import { Link } from "react-router-dom"

function ProductCard({ id , title , category , description , price , image , rating}) {


    return (
        <>
            <div className="featured-product border p-3 mb-3 position-relative rounded" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/wish.svg" className='position-absolute wish-icon' />
                <div className="icons position-absolute">
                    <img src="/images/prodcompare.svg" className='d-block mb-3' />
                    <img src="/images/view.svg" className='d-block mb-3' />
                    <img src="/images/img-zoom.svg" className='d-block mb-3' />
                    <img src="/images/add-cart.svg" className='d-block mb-3' />
                </div>
                <img className='img-fluid product-image mb-3' src={image} alt="product img" />
                <div className="product-content">
                    <div className="product-category mb-3">{category}</div>
                    <Link to="products/portable-speaker" className='text-dark'>
                        <div className="product-name fw-bold mb-3 text-truncate">{title}</div>
                    </Link>
                    <div className="details">{description && description.substring(0 , 75) + "...."}</div>
                    <ReactStars
                        count={5}
                        size={24}
                        value={rating && rating.rate}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="price fw-bold">${price}</div>
                        <button className="btn add-to-cart text-dark fw-bold"><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
