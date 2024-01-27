/* eslint-disable no-unused-vars */
import React from 'react'
import ProductCard from '../components/ProductCard'
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import SpecialProduct from '../components/SpecialProduct';
import Service from '../components/Service';
import Category from '../components/Category';
import "./css/Home.css"
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';


function Home() {

    const products = useSelector(state => state.products)

    const productsCards = products && products.map(product => {

        return (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3  " >
                <ProductCard  {...product} />
            </div> 
        )
    })
    

    return (
        <>
            <section className='banner py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-6 mb-3 mb-xl-0">
                            <div className="main-banner position-relative " data-aos="zoom-out-right" data-aos-duration="1000">
                                <img className='img-fluid w-100  rounded' src="/images/catbanner-01.jpg" alt="" />
                                <div className="banner-content position-absolute">
                                    <p>SUPERCHARGED FOR PROS</p>
                                    <h2 className='fw-bold mb-3'>Special Sale</h2>
                                    <p>from $999.0 or $41.62/mo <br /> for 24 mo. Footnote</p>
                                    <button className='btn text-white rounded'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 ">
                            <div className="row ">
                                <div className="col-12 col-sm-6 mb-3 ">
                                    <div className="secondary-banner position-relative  " data-aos="zoom-out-left" data-aos-duration="500">
                                        <img className='img-fluid w-100  rounded' src="/images/catbanner-02.jpg" alt="" />
                                        <div className="banner-content position-absolute">
                                            <p>BEST SALE</p>
                                            <h2 className=' mb-3'>Laptops Max</h2>
                                            <p>from $1699.0 or<br /> $64.42/mo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <div className="secondary-banner position-relative  " data-aos="zoom-out-left" data-aos-duration="1000">
                                        <img className='img-fluid w-100  rounded' src="/images/catbanner-03.jpg" alt="" />
                                        <div className="banner-content position-absolute">
                                            <p>BEST SALE</p>
                                            <h2 className=' mb-3'>Buy IPad Air</h2>
                                            <p>from $599 or<br /> $49.91/mo for 12 mo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <div className="secondary-banner position-relative  " data-aos="zoom-out-left" data-aos-duration="1500">
                                        <img className='img-fluid w-100  rounded' src="/images/catbanner-04.jpg" alt="" />
                                        <div className="banner-content position-absolute">
                                            <p>BEST SALE</p>
                                            <h2 className=' mb-3'>Smartwatch 7</h2>
                                            <p>Shop the latest <br />band styles and colors</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <div className="secondary-banner position-relative  " data-aos="zoom-out-left" data-aos-duration="2000">
                                        <img className='img-fluid w-100  rounded' src="/images/catbanner-01.jpg" alt="" />
                                        <div className="banner-content position-absolute">
                                            <p>BEST SALE</p>
                                            <h2 className=' mb-3'>AirPods Max</h2>
                                            <p>High-fidelity playback<br />  & ultra-low distortion</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services py-4">
                <div className="container">
                    <div className="row " >
                        <Service img="service.png" title="Free Shipping" description="from all orders over $100" />
                        <Service img="service-02.png" title="Dally Surprise Offers" description="save up to 25% off" />
                        <Service img="service-03.png" title="Support 24/7" description="shop with an expert" />
                        <Service img="service-04.png" title="Secure Payments" description="100% protect payments" />
                    </div>
                </div>
            </section>
            <section className="categories py-5">
                <div className="container">
                    <div className="row bg-white" >
                        <div className="category col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <Category img="laptop.jpg" title="computers & laptop" numOfItems="8" />
                        </div>
                        <div className="category col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <Category img="camera.jpg" title="Cameras & videos" numOfItems="10" />
                        </div>
                        <div className="category col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <Category img="tv.jpg" title="smart television" numOfItems="12" />
                        </div>
                        <div className="category col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <Category img="tv.jpg" title="smartwatches" numOfItems="13" />
                        </div>
                        <div className="category col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <Category img="tv.jpg" title="Mobile & tablets" numOfItems="9" />
                        </div>
                        <div className="category col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <Category img="headphone.jpg" title="Headphones" numOfItems="8" />
                        </div>
                        <div className="category col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <Category img="acc.jpg" title="Accessories" numOfItems="8" />
                        </div>
                        <div className="category col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <Category img="speaker.jpg" title="portable Speakers" numOfItems="8" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-collection py-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Featured Collection</h3>
                        <Link to="/products#top" className='text-dark'>See More Products <i className="bi bi-arrow-right"></i></Link>
                    </div>
                    <div className="row py-3">
                        {productsCards}
                    </div>
                </div>
            </section>
            <section className="special-products py-5">
                <div className="container">
                    <h3 className='mb-3'>Special Products</h3>
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-4 mb-2  " data-aos="fade-up" >
                            <SpecialProduct />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4 mb-2  " data-aos="fade-up" >
                            <SpecialProduct />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4 mb-2  " data-aos="fade-up" >
                            <SpecialProduct />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4 mb-2  " data-aos="fade-up" >
                            <SpecialProduct />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4 mb-2  " data-aos="fade-up" >
                            <SpecialProduct />
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-products">
                <div className="container">
                    <h3 className='mb-3'>Our Popular Products</h3>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3" data-aos="fade-up" data-aos-duration="1000">
                            <div className="categories rounded  h-100">
                                <div className="category d-flex align-items-center">
                                    <img src="/images/watch.jpg" alt="" className="img-fluid" />
                                    <p className='mb-0 active'>Smart Watch</p>
                                </div>
                                <div className="category d-flex align-items-center">
                                    <img src="/images/watch.jpg" alt="" className="img-fluid" />
                                    <p className='mb-0'>Smart Watch</p>
                                </div>
                                <div className="category d-flex align-items-center">
                                    <img src="/images/watch.jpg" alt="" className="img-fluid" />
                                    <p className='mb-0'>Smart Watch</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3" data-aos="fade-up" data-aos-duration="1000">
                            <div className="product-offer h-100 bg-dark p-3 rounded">
                                <div className="content text-white">
                                    <p>15% OFF</p>
                                    <h3>Smart Watch</h3>
                                    <p>From $399 or $16.62/mo for 24 mo. </p>
                                </div>
                                <img src="/images/product-offer.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3" >
                            <ProductCard />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3" >
                            <ProductCard />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3" >
                            <ProductCard />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3" >
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
            <section className="marquee py-5">
                <div className="container">
                    <div className="row bg-white">
                        <Marquee >
                            <img src="/images/brand-01.png" alt="" className="img-fluid px-4" />
                            <img src="/images/brand-02.png" alt="" className="img-fluid px-4" />
                            <img src="/images/brand-03.png" alt="" className="img-fluid px-4" />
                            <img src="/images/brand-04.png" alt="" className="img-fluid px-4" />
                            <img src="/images/brand-05.png" alt="" className="img-fluid px-4" />
                            <img src="/images/brand-06.png" alt="" className="img-fluid px-4" />
                            <img src="/images/brand-07.png" alt="" className="img-fluid px-4" />
                            <img src="/images/brand-08.png" alt="" className="img-fluid px-4" />
                        </Marquee>
                    </div>
                </div>
            </section>
            <section className="blog py-3">
                <div className="container">
                    <h3 className='mb-3'>Out Latest News</h3>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 " >
                            <BlogCard />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 " >
                            <BlogCard />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 " >
                            <BlogCard />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 " >
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

