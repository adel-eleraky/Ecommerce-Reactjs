import React from 'react'
import "./css/CartOffcanvas.css"
import { Link } from 'react-router-dom'

function CartOffcanvas() {
    return (
        <>
            <div className="cart-offcanvas offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvas">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="cartOffcanvas">Cart Content</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="cart-item d-flex justify-content-around align-items-center">
                        <i className="bi bi-x-octagon delete-btn fs-5"></i>
                        <img src="/images/headphone.jpg" alt="" className="img-fluid" />
                        <div className="content text-center">
                            <h5 className='title'>portable speaker</h5>
                            <span className="price">1 * 50$</span>
                        </div>
                    </div>
                    <hr />
                    <Link to="cart" className="btn text-white">View Cart</Link>
                </div>
            </div>
        </>
    )
}

export default CartOffcanvas
