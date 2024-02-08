/* eslint-disable no-unused-vars */
import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./css/ProductCard.css"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addToCart } from '../rtk/features/CartSlice';
import { addToWishlist, removeFromWishlist } from '../rtk/features/WishlistSlice';
import { useState } from 'react';

function ProductCard({ id, title, category, description, price, image, rating, wished }) {

    const dispatch = useDispatch()
    const [wish, setWish] = useState(wished || false)

    const WishlistHandler = () => {

        wish ?
            dispatch(removeFromWishlist({ id }))
            :
            dispatch(addToWishlist({ id, title, category, description, price, image, rating }))
        setWish(prev => !prev)
    }

    return (
        <>
            <div className="featured-product border p-3 mb-3 position-relative rounded" data-aos="fade-up" data-aos-duration="1000">
                {wish ?
                    <i className="fa-solid fa-heart position-absolute wish-icon" style={{ color: "#bc1a1a" }} role="button" onClick={WishlistHandler}></i>
                    :
                    <i className="fa-regular fa-heart position-absolute wish-icon" role="button" onClick={WishlistHandler}></i>
                }
                <div className="icons position-absolute">
                    <img src="/images/prodcompare.svg" className='d-block mb-3' />
                    <img src="/images/view.svg" className='d-block mb-3' />
                    <img src="/images/img-zoom.svg" className='d-block mb-3' />
                    <img src="/images/add-cart.svg" className='d-block mb-3' />
                </div>
                <img className='img-fluid product-image mb-3' src={image} alt="product img" />
                <div className="product-content">
                    <div className="product-category mb-3">{category}</div>
                    <Link to={`/product/${id}`} className='text-dark'>
                        <div className="product-name fw-bold mb-3 text-truncate">{title}</div>
                    </Link>
                    <div className="details">{description?.substring(0, 75) + "...."}</div>
                    <ReactStars
                        count={5}
                        size={24}
                        value={rating?.rate}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="price fw-bold">${price}</div>
                        <button className="btn add-to-cart text-dark fw-bold" onClick={() => dispatch(addToCart({ id, title, image, price, quantity: 1 }))}><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
