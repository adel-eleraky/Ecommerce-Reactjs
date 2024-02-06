import React from 'react'
import "./css/NavOffcanvas.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavOffcanvas() {

    const categories = useSelector(state => state.categories)

    return (
        <>
            <div className="nav-offcanvas offcanvas offcanvas-start" tabIndex="-1" id="navOffcanvas" aria-labelledby="navOffcanvas">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text search-span" id="basic-addon2"><i className="bi bi-search"></i></span>
                        </div>
                    </div>
                    <div className="menu mt-5">
                        <ul className='p-0'>
                            <li>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Shop Categories
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className='p-0'>
                                                    {
                                                        categories && categories.map((category , index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <Link to={`products/${category}`}>{category}</Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="products">Our Store</Link></li>
                            <li><Link to="blog">Blog</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavOffcanvas
