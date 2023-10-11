/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css"

function Header() {
    return (
        <>
            <header className="first-header">
                <div className="container">
                    <div className="row py-2">
                        <div className="col-md-7 mb-3 mb-md-0">
                            Free shipping over 100$ and free return
                        </div>
                        <a href="tel:+201554138144" className="col-md-5">
                            Hotline: +20 1554138144
                        </a>
                    </div>
                </div>
            </header>
            <header className="second-header">
                <div className="container">
                    <div className="row py-2 align-items-center">
                        <div className="col-2 mb-3 mb-lg-0"><h3>Digitic.</h3></div>
                        <div className="col-md-8 col-lg-4 col-10 mb-3 mb-lg-0">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text search-span" id="basic-addon2"><i className="bi bi-search"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 ">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid ">
                                    <button className="navbar-toggler bg-white mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav w-100 justify-content-between mb-2 mb-lg-0">
                                            <li className="nav-item mb-4 mb-lg-0">
                                            <Link>
                                                <div className="d-flex align-items-center gap-10">
                                                    <div>
                                                        <img src="images/compare.svg" />
                                                    </div>
                                                    <p className="m-0">Compare  Products</p>
                                                </div>
                                            </Link>
                                            </li>
                                            <li className="nav-item mb-4 mb-lg-0">
                                            <Link>
                                                <div className="d-flex align-items-center gap-10">
                                                    <div>
                                                        <img src="images/wishlist.svg" />
                                                    </div>
                                                    <p className="m-0">Favorite  Wishlist</p>
                                                </div>
                                            </Link>
                                            </li>
                                            <li className="nav-item mb-4 mb-lg-0">
                                            <Link>
                                                <div className="d-flex align-items-center gap-10">
                                                    <div>
                                                        <img src="images/user.svg" />
                                                    </div>
                                                    <p className="m-0">Log in  My Account</p>
                                                </div>
                                            </Link>
                                            </li>
                                            <li className="nav-item mb-4 mb-lg-0">
                                            <Link>
                                                <div className="d-flex align-items-center gap-10">
                                                    <div>
                                                        <img src="images/cart.svg" />
                                                    </div>
                                                    <p className="m-0"><span className="badge rounded-pill text-bg-light">0</span><br /> $100</p>
                                                </div>
                                            </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <header className="third-header ">
                <div className="container">
                    <div className="row py-3 align-items-center">
                        <div className="col-12 col-md-3 mb-4 mb-md-0" style={{ borderRight: "2px solid #d09905" }}>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle fw-bold border-0 bg-transparent p-0 w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <Link className="me-3 text-white">
                                    HOME
                                </Link>
                                <Link className="me-3 text-white">
                                    OUR STORE
                                </Link>
                                <Link className="me-3 text-white">
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
        </>
    )
}

export default Header;





