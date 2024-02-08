import React, { useState } from 'react'
import "./css/ProductDetails.css"
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import ProductSwiper from '../components/ProductSwiper';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/features/CartSlice';
import { addToWishlist } from '../rtk/features/WishlistSlice';


function ProductDetails() {

    const { productId } = useParams()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const products = useSelector(state => state.products)
    const productDetails = products.filter(product => product.id === +productId)[0]

    const { id, title, category, description, price, image, rating } = productDetails
    return (
        <>
            <div className="product-page py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                            <ProductSwiper images={[image]} />
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="content">
                                <h3 className="name border-bottom pb-2">{title}</h3>
                                <h4 className="price">Price: {price}$</h4>
                                <h4 className="rating">Rating: {rating.rate}
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={rating.rate}
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                </h4>
                                <hr />
                                <div className="product-details">
                                    <h4 className='category'>Category: <span className='fw-light'>{category}</span></h4>
                                    <h4 className='availability'>Availability: <span className='fw-light'>5 In-Stock</span></h4>
                                    <h4 className='quantity'>Order Quantity: <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></h4>
                                </div>
                                <button className="btn add-to-cart text-dark fw-bold me-3" onClick={() => dispatch(addToCart({ id, title, image, price, quantity }))}><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                                <button className="btn add-to-wishlist text-dark fw-bold" onClick={() => dispatch(addToWishlist({ id, title, category, description, price, image, rating }))}><i className="fa-regular fa-heart me-2"></i>Add to WishList</button>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
