import React from 'react'
import "./css/Wishlist.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function Wishlist() {

    const wishlist = useSelector(state => state.wishlist)
    const wishlistItems = wishlist && wishlist.map(product => {
        return (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ProductCard {...product } wished="true" />
            </div>
        )
    })

    console.log(wishlist)
    console.log(wishlistItems)
    return (
        <div className="wishlist-page py-4">
            {wishlist && wishlist.length > 0 ?
                <>
                    <h1 className="text-center mb-4">Your Wishlist</h1>
                    <div className="container">
                        <div className="row">
                            {wishlistItems}
                        </div>
                    </div>
                </>
                :
                <>
                    <h1 className="text-center text-danger fw-bold mb-4">Wishlist is empty</h1>
                    <Link to="/products" className='text-dark d-block text-center'>Back to browse Products <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </>
            }
        </div>
    )
}

export default Wishlist
