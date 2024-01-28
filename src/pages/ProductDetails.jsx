import React from 'react'
import "./css/ProductDetails.css"
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import ProductSwiper from '../components/ProductSwiper';
import { useSelector } from 'react-redux';


function ProductDetails() {

    const {id} = useParams()

    const products = useSelector(state => state.products)
    const productDetails = products.filter(product => product.id === +id)[0]

    return (
        <>
            <div className="product-page py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                            <ProductSwiper images={[productDetails.image]} />
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="content">
                                <h3 className="name border-bottom pb-2">{productDetails.title}</h3>
                                <h4 className="price">Price: {productDetails.price}$</h4>
                                <h4 className="rating">Rating: {productDetails.rating.rate}
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={productDetails.rating.rate}
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                </h4>
                                <hr />
                                <div className="product-details">
                                    <h4 className='category'>Category: <span className='fw-light'>{productDetails.category}</span></h4>
                                    <h4 className='availability'>Availability: <span className='fw-light'>5 In-Stock</span></h4>
                                    <h4 className='quantity'>Quantity: <input type="number" name="quantity" defaultValue="1" /></h4>
                                </div>
                                <button className="btn add-to-cart text-dark fw-bold me-3"><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                                <button className="btn add-to-wishlist text-dark fw-bold"><i className="fa-regular fa-heart me-2"></i>Add to WishList</button>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h3>Description</h3>
                        <p>{productDetails.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
