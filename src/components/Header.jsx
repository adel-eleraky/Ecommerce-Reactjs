/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css"
import CartOffcanvas from "./CartOffcanvas";
import NavOffcanvas from "./NavOffcanvas";




function Header() {
    return (
        <>
            <header className="first-header">
                <div className="container">
                    <div className="row py-2">
                        <div className="col-md-7 mb-3 mb-md-0">
                            Free shipping over 100$ and free return
                        </div>
                        <a href="tel:+201554138144" className="col-md-5 text-white">
                            Hotline: +20 1554138144
                        </a>
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
                                <h2 className="d-inline-block mb-0 ms-3 site-title">Digitic.</h2>
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
                                    <Link>
                                        <div className="d-flex align-items-center gap-10">
                                            <div>
                                                <img src="/images/wishlist.svg" />
                                            </div>
                                            <p className="m-0">Wishlist</p>
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
                                        <div className="d-flex align-items-center gap-10">
                                            <div>
                                                <img src="/images/cart.svg" />
                                            </div>
                                            <p className="m-0"><span className="badge rounded-pill text-bg-light">0</span><br /> $100</p>
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
                                <ul className="dropdown-menu dropdown-menu-dark mt-2 w-100">
                                    <li><a className="dropdown-item " href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
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
                                <Link to="blog" className="me-3 text-white">
                                    BLOG
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
        </>
    )
}

export default Header;





