/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css"
import CartOffcanvas from "./CartOffcanvas";
import NavOffcanvas from "./NavOffcanvas";
import { useSelector } from "react-redux";

function Header() {

    const cartLength = useSelector(state => state.cart).length
    const WishlistLength = useSelector(state => state.wishlist).length
    const categories = useSelector(state => state.categories.data)

    return (
        <div>
            <header className="first-header">
                <div className="container">
                    <div className="row py-2">
                        <div className="col-md-7 mb-3 mb-md-0">
                            Free shipping over 100$ and free return
                        </div>
                        <div className="col-md-5 text-white">
                            <a href="https://github.com/adel-eleraky" target="_blank" rel="noreferrer">
                                <i className="fs-3 me-4 fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/adel-eleraky/" target="_blank" rel="noreferrer">
                                <i className="fs-3 me-4 fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://www.facebook.com/adel.el3raky" target="_blank" rel="noreferrer">
                                <i className="fs-3 me-4 fa-brands fa-facebook"></i>
                            </a>
                            <a href="">
                                <i className="fs-3 me-4 fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <header className="second-header">
                <div className="container">
                    <div className="row py-2 align-items-center">
                        <div className="col-2">
                            <div className="d-flex">
                                <button className="btn btn-primary bar-icon p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navOffcanvas" aria-controls="navOffcanvas">
                                    <i className="fa-solid fa-bars fs-3"></i>
                                </button>
                                <Link to="/">
                                    <h2 className="d-inline-block mb-0 ms-3 site-title">Digitic.</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="col-4 search-col">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text search-span" id="basic-addon2"><i className="bi bi-search"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-lg-6">
                            <ul className="d-flex justify-content-end align-items-center mb-0">
                                <li className="list-item">
                                    <Link to="wishlist">
                                        <div className="wishlist d-flex align-items-center gap-10 position-relative">
                                            <div>
                                                <img src="/images/wishlist.svg" />
                                            </div>
                                            <p className="m-0">Wishlist</p>
                                            <span className="badge rounded-pill text-bg-light bg-red position-absolute ">{WishlistLength}</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link to="login">
                                        <div className="d-flex align-items-center gap-10">
                                            <div>
                                                <img src="/images/user.svg" />
                                            </div>
                                            <p className="m-0">Account</p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <a className="btn btn-primary cart-icon" data-bs-toggle="offcanvas" href="#cartOffcanvas" role="button" aria-controls="cartOffcanvas">
                                        <div className="d-flex align-items-center gap-10 position-relative">
                                            <div>
                                                <img src="/images/cart.svg" />
                                            </div>
                                            <span className="badge rounded-pill text-bg-light position-absolute ">{cartLength}</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <header className="third-header ">
                <div className="container">
                    <div className="row py-3 align-items-center">
                        <div className="col-12 col-md-3 mb-4 mb-md-0" style={{ borderRight: "2px solid #d09905" }}>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle text-white fw-bold border-0 bg-transparent p-0 w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop Categories
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark p-0 mt-2">
                                    {categories && categories.map((category, index) => {
                                        return (
                                            <li className="category-item" key={index}>
                                                <Link to={`products/${category.slug}`} className="d-block">{category.name}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-9">
                            <div className="links ">
                                <Link to="" className="me-3 text-white">
                                    HOME
                                </Link>
                                <Link to="products" className="me-3 text-white">
                                    OUR STORE
                                </Link>
                                <Link className="me-3 text-white">
                                    CONTACT
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <CartOffcanvas />
            <NavOffcanvas />
        </div>
    )
}

export default Header;





