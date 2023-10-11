/* eslint-disable no-unused-vars */
import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./css/ProductCard.css"

function ProductCard() {
    return (
        <>
            <div className="featured-product border p-3 position-relative rounded">
                <img src="images/wish.svg" className='position-absolute wish-icon'/>
                <div className="icons position-absolute">
                    <img src="images/prodcompare.svg" className='d-block mb-3' />
                    <img src="images/view.svg"  className='d-block mb-3'/>
                    <img src="images/img-zoom.svg"  className='d-block mb-3'/>
                    <img src="images/add-cart.svg"  className='d-block mb-3'/>
                </div>
                <img className='img-fluid' src="images/tab.jpg" alt="product img" />
                <div className="product-content">
                    <div className="product-brand mb-3">Havells</div>
                    <div className="product-name fw-bold mb-3">Honor T1 7.0 1GB RAM 8GB ROM</div>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <div className="price">$100</div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
