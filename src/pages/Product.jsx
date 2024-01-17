import React from 'react'
import "./css/Product.css"
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import ProductSwiper from './../components/ProductSwiper';


function Product() {

    const productName = useParams()
    console.log(productName)
    return (
        <>
            <div className="product-page py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                            <ProductSwiper />
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="content">
                                <h3 className="name border-bottom pb-2">Portable Speaker</h3>
                                <h4 className="price">Price: 50$</h4>
                                <h4 className="rating">Rating: 4.5
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </h4>
                                <hr />
                                <div className="product-details">
                                    <h4 className='brand'>Brand: <span className='fw-light'>havells</span></h4>
                                    <h4 className='category'>Category: <span className='fw-light'>electronics</span></h4>
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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, blanditiis. Unde dolor cumque est, distinctio nesciunt eius enim illum perspiciatis sequi nostrum quae saepe! Nesciunt molestiae itaque sunt eligendi quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, odio quae laborum doloribus quam mollitia praesentium necessitatibus in facilis reprehenderit ipsa qui at possimus dicta, nemo ullam corporis! Omnis, inventore?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
