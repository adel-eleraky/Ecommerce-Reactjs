import React from 'react'
import "./css/Cart.css"

function Cart() {
    return (
        <>
            <div className="cart-page py-3">
                <h3 className='text-center mb-3'>Your Cart</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <table className="table bg-transparent">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='d-flex align-items-center'>
                                            <img src="/images/speaker.jpg" alt="" className="img-fluid product-img" />
                                            <p>portable speaker</p>
                                        </td>
                                        <td>50$</td>
                                        <td><input type="number" name="quantity" defaultValue="1" /><i className="fa-solid fa-trash-can ms-2 fs-5 trash-icon"></i></td>
                                        <td>50$</td>
                                    </tr>
                                    <tr>
                                        <td className='d-flex align-items-center'>
                                            <img src="/images/speaker.jpg" alt="" className="img-fluid product-img" />
                                            <p>portable speaker</p>
                                        </td>
                                        <td>50$</td>
                                        <td><input type="number" name="quantity" defaultValue="1" /><i className="fa-solid fa-trash-can ms-2 fs-5 trash-icon"></i></td>
                                        <td>50$</td>
                                    </tr>
                                    <tr>
                                        <td className='d-flex align-items-center'>
                                            <img src="/images/speaker.jpg" alt="" className="img-fluid product-img" />
                                            <p>portable speaker</p>
                                        </td>
                                        <td>50$</td>
                                        <td><input type="number" name="quantity" defaultValue="1" /><i className="fa-solid fa-trash-can ms-2 fs-5 trash-icon"></i></td>
                                        <td>50$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-12 col-md-3">
                            <h3 className='mb-3'>Total Price : 1000$</h3>
                            <button className="btn text-white checkout-btn">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
