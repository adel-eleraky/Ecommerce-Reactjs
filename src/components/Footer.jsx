/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Footer.css"

function Footer() {
    return (
        <>
            <footer className="first-footer ">
                <div className="container">
                    <div className="row py-4 align-items-center">
                        <div className="col-12 col-md-5 mb-3 m-md-0 d-flex align-items-center">
                            <img src="/images/send.png" alt="" className="img-fluid" />
                            <h3>Sign Up For Our Newsletter</h3>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="input-group ">
                                <input type="text" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text subscribe-span" id="basic-addon2"><button className='btn text-white'>Subscribe</button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="second-footer">
                <div className="container">
                    <div className="row py-4 ">
                        <div className="col-12 col-sm-6 col-lg-3 mb-5 m-lg-0">
                            <h3 className='fw-bold mb-4'>Contact Us</h3>
                            <div className="contact-information">
                                <p  className='m-0'>Demo Store</p>
                                <address className='m-0'>NO. 12459 Freedom, New York, 1111</address>
                                <p >United States</p>
                                <a href='tel:+201554138144' className='d-block mb-2'>tel: +201554138144</a>
                                <a href="mailto:kameladel339@gmail.com" className='m-0'>Email: kameladel339@gmail.com</a>
                            </div>
                            <div className="social-icons">

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-5 m-lg-0">
                            <h3 className='fw-bold mb-4'>Information</h3>
                            <div className="information d-flex flex-column">
                                <Link className='text-white mb-2'>Privacy Policy </Link>
                                <Link className='text-white mb-2'>Refund Policy </Link>
                                <Link className='text-white mb-2'>Shipping Policy</Link>
                                <Link className='text-white mb-2'>Terms of Services</Link>
                                <Link className='text-white mb-2'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-5 m-lg-0">
                            <h3 className='fw-bold mb-4'>Account</h3>
                            <div className="account d-flex flex-column">
                                <Link className='text-white mb-2'> Search </Link>
                                <Link className='text-white mb-2'>About Us </Link>
                                <Link className='text-white mb-2'>FAQ</Link>
                                <Link className='text-white mb-2'>Contact</Link>
                                <Link className='text-white mb-2'>Size Chart</Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-5 m-lg-0">
                            <h3 className='fw-bold mb-4'>Quick Links</h3>
                            <div className="quick-links d-flex flex-column">
                                <Link className='text-white mb-2'>Accessories </Link>
                                <Link className='text-white mb-2'>Laptops </Link>
                                <Link className='text-white mb-2'>Headphones</Link>
                                <Link className='text-white mb-2'>Smart Watches</Link>
                                <Link className='text-white mb-2'>Tablets</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="third-footer text-center py-3">
                <p className='m-0'>&copy; {new Date().getFullYear()}, Digitic Designed by<span className='text-danger fw-bold ms-2 creator-name'> adel-el3raky </span></p>
            </footer>
        </>
    )
}

export default Footer
