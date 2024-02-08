import React, { useState } from 'react'
import "./css/Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeQuantity, removeFromCart } from '../rtk/features/CartSlice'


function Cart() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const totalPrice = cart && cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

    const cartItems = cart && cart.map((item, index) => {

        const { id , title , image , price , quantity} = item

        return (
            <tr key={id}>
                <td className='d-flex align-items-center'>
                    <i className="bi bi-x-octagon delete-btn fs-5" onClick={() => dispatch(removeFromCart({ id }))}></i>
                    <img src={image} alt="" className="img-fluid product-img d-block mx-3" />
                    <Link to={`/product/${id}`} className='text-dark'><p>{title?.substring(0, 50) + "..."}</p></Link>
                </td>
                <td>{price}$</td>
                <td><input type="number" name={`${title}-quantity`} value={quantity} onChange={(e) => dispatch(changeQuantity({ id , quantity: +e.target.value }))} /></td>
                <td>{(price * quantity).toFixed(2)}$</td>
            </tr>
        )
    })


    return (
        <>
            <div className="cart-page py-3">
                {cartItems.length === 0 ?
                    <div className="empty-cart py-3">
                        <h3 className='text-center text-danger fw-bold mb-4'>Your Cart is empty</h3>
                        <Link to="/products" className='text-dark d-block text-center'>Back to browse Products <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    </div>
                    :
                    <div className="container">
                        <h3 className="mb-3 text-center">Your Cart</h3>
                        <div className="row">
                            <div className='col-12 col-lg-8 table-container'>
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='w-50'>Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className='cart-total'>
                                    <h3 className='mb-3'>Total Price : {totalPrice.toFixed(2)}$</h3>
                                    <div className="coupon-card">
                                        <input className='coupon-input' type='text' name='coupon' placeholder='coupon code' />
                                        <button className="btn coupon-btn text-white">Apply Coupon</button>
                                    </div>
                                    <button className="btn text-white checkout-btn">Proceed to Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart
