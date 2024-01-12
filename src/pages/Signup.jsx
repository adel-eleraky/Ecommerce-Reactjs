/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/signup.css"
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <>
            <div className="signup-page py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-7">
                            <div className="content  bg-white p-4 rounded">
                                <h3 className='mb-4 text-center'>Create New Account</h3>
                                <form action="" className='login-form mb-3'>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingName" placeholder="name" />
                                        <label htmlFor="floatingName">Your Full Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                                        <label htmlFor="floatingEmail">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Confirm Password</label>
                                    </div>
                                    <button className='btn d-block mx-auto text-white mb-5 mt-2'>Sign Up</button>
                                </form>
                                <h6 className='text-center mb-3'>Sign Up With Social Media Account</h6>
                                <div className="social-icons d-flex justify-content-center gap-15 mb-4">
                                    <div className="facebook-icon"><i className="fa-brands fa-facebook fs-1"></i></div>
                                    <div className="google-icon"><i className="fa-brands fa-google fs-1"></i></div>
                                </div>
                                <h6 className='text-center mb-3'>Have Account ? </h6>
                                <Link to="/login" ><button className='btn btn-secondary d-block mx-auto'>Log In to Your Account</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
