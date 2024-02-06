import React from 'react'
import "./css/CartOffcanvas.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../rtk/features/CartSlice'

function CartOffcanvas() {

    const cart = useSelector(state => state.cart)

    const totalPrice = cart && cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

    const dispatch = useDispatch()

    const cartItems = cart && cart.map((item, index) => {

        const { id, title, image, price, quantity } = item

        return (
            <div key={index} className="cart-item d-flex justify-content-around align-items-center">
                <i className="bi bi-x-octagon delete-btn fs-5" onClick={() => dispatch(removeFromCart({ id }))}></i>
                <img src={image} alt="" className="img-fluid" />
                <div className="content text-center flex-grow-1">
                    <h5 className='title'>{title}</h5>
                    <span className="price">{quantity} * {price}$</span>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="cart-offcanvas offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvas">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="cartOffcanvas">Cart Content</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {cart.length === 0 ?
                        <div className='empty-cart' >Your Cart is empty</div>
                        :
                        <>
                            {cartItems}
                            <div className='total-price mt-3 fw-bold'>Total Price: <span className='price'>{totalPrice}$</span></div>
                            < Link to="cart" className="btn text-white d-block text-center w-50 mt-4 mx-auto">View Cart</Link>
                        </>
                    }
                </div>
            </div >
        </>
    )
}

export default CartOffcanvas
