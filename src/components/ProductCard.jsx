/* eslint-disable no-unused-vars */
import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./css/ProductCard.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/features/CartSlice';
import { addToWishlist, removeFromWishlist } from '../rtk/features/WishlistSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCard({ id, title, brand, category, description, discountPercentage, price, thumbnail, images, stock, rating }) {

    const wishlist = useSelector(state => state.wishlist)
    const isProductInWishlist = wishlist.some(product => product.id === id);

    const [wish, setWish] = useState(isProductInWishlist || false)
    const notifyAddToCart = () => {
        toast.success('Product Added To Cart', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
    }
    const notifyWishlist = (action) => {
        toast.success(`Product ${action} Wishlist`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            icon: () => action === "Added to" ? <i className="fa-solid fa-face-grin-hearts fs-4" style={{ color: "#d94545" }}></i> : <i className="fa-solid fa-heart-crack fs-4" style={{ color: "#d94545" }}></i>
        });
    }

    const dispatch = useDispatch()
    const addToCartHandler = () => {
        const priceAfterDiscount = price * (100 - discountPercentage) / 100
        dispatch(addToCart({ id, title, price, discountPercentage, priceAfterDiscount, thumbnail, quantity: 1 }))
        notifyAddToCart()
    }

    const WishlistHandler = () => {

        wish ?
            dispatch(removeFromWishlist({ id }))
            :
            dispatch(addToWishlist({ id, title, category, description, price, thumbnail, rating }))

        notifyWishlist(wish ? "Removed from" : "Added to")
        setWish(prev => !prev)
    }

    return (
        <>
            <div className="featured-product border p-3 mb-3 position-relative rounded" data-aos="fade-up" data-aos-duration="1000">
                <span className="badge rounded-pill text-bg-light position-absolute">-{discountPercentage}%</span>
                <span className="wish-icon" onClick={WishlistHandler}>
                    {wish ?
                        <i className="fa-solid fa-heart" style={{ color: "#bc1a1a" }} role="button" ></i>
                        :
                        <i className="fa-regular fa-heart" role="button" ></i>
                    }
                </span>
                <div className="icons position-absolute">
                    <img src="/images/prodcompare.svg" className='d-block mb-3' />
                    <img src="/images/view.svg" className='d-block mb-3' />
                    <img src="/images/img-zoom.svg" className='d-block mb-3' />
                    <img src="/images/add-cart.svg" className='d-block mb-3' />
                </div>
                <img className='img-fluid product-image mb-3' src={thumbnail} alt="product img" />
                <div className="product-content">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="product-category">{category}</div>
                        <div className="product-brand">{brand}</div>
                    </div>
                    <Link to={`/product/${id}`} className='text-dark'>
                        <div className="product-name fw-bold mb-3 text-truncate">{title}</div>
                    </Link>
                    <div className="details">{description?.substring(0, 60) + "...."}</div>
                    <ReactStars
                        count={5}
                        size={24}
                        value={rating}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="price fw-bold">${price}</div>
                        <button className="btn add-to-cart text-dark fw-bold" onClick={addToCartHandler}><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
