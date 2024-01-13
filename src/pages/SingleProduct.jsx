import React from 'react'
import "./css/SingleProduct.css"
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";


function SingleProduct() {

    const productName = useParams()
    console.log(productName)
    return (
        <>
            <div className="product-page py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-5">
                            <img src="/images/speaker.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-7">
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
