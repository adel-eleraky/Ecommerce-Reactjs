import React, { useState } from 'react'
import "./css/ProductDetails.css"
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import ProductSwiper from '../components/ProductSwiper';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/features/CartSlice';
import { addToWishlist, removeFromWishlist } from '../rtk/features/WishlistSlice';
import { toast } from 'react-toastify';
import img from "./../assets/user.png"

function ProductDetails() {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const products = useSelector(state => state.products.data.products)
    const wishlist = useSelector(state => state.wishlist)

    const { productId } = useParams()
    const productDetails = products?.filter(product => product.id === +productId)[0]
    const { id, title, category, description, price, thumbnail, reviews, images, rating, brand, stock, discountPercentage } = productDetails

    const isProductInWishlist = wishlist.some(product => product.id === +productId)
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

    const addToCartHandler = () => {
        const priceAfterDiscount = price * (100 - discountPercentage) / 100
        dispatch(addToCart({ id, title, price, discountPercentage, priceAfterDiscount, thumbnail, quantity }))
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
            <div className="product-page py-5">
                <div className="container bg-white p-4 rounded">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                            <ProductSwiper images={images} />
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="content">
                                <h3 className="name border-bottom pb-2">{title}</h3>
                                <h4 className="price">Price: {price}$</h4>
                                <h4 className='discount'>Discount: -{discountPercentage}%</h4>
                                <h4 className='price-after-discount'>Price after Discount: {price * (100 - discountPercentage) / 100}$</h4>
                                <h4 className="rating">Rating: {rating}
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={rating}
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                </h4>
                                <hr />
                                <div className="product-details">
                                    <h4 className='brand'>Brand: <span className='fw-light'>{brand}</span></h4>
                                    <h4 className='category'>Category: <span className='fw-light'>{category}</span></h4>
                                    <h4 className='availability'>Availability: <span className='fw-light'>{stock} In-Stock</span></h4>
                                    <h4 className='quantity'>Order Quantity: <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></h4>
                                </div>
                                <button className="btn add-to-cart text-dark fw-bold me-3" onClick={addToCartHandler}><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                                <button className="btn add-to-wishlist text-dark fw-bold" onClick={WishlistHandler}>
                                    {wish ? <><i className="fa-solid fa-heart-crack me-2"></i> Remove from wishlist</> : <><i className="fa-solid fa-heart me-2"></i> Add to wishlist</>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>
                    <div class="reviews border-top py-3">
                        <h2>Reviews</h2>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div class="review_form">
                                    <h3>Leave a Review</h3>
                                    <form id="review-form">
                                        <textarea name="comment" id="review-comment" cols="30" rows="10"
                                            placeholder="Write a review..."></textarea>
                                        <div class="rating">
                                            <label for="rating">Rating</label>
                                            <input type="number" id="rating" />
                                        </div>
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div class="cards">
                                    {reviews && reviews.map(review => {
                                        return (
                                            <div class="review_card">
                                                <div class="user_details">
                                                    <img src={img}
                                                        alt="" className='img-fluid' />
                                                    <h3>{review.reviewerName}</h3>
                                                </div>
                                                <div class="rating">
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={review.rating}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                </div>
                                                <div class="comment">
                                                    {review.comment}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductDetails
