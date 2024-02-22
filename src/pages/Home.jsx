/* eslint-disable no-unused-vars */
import React from 'react'
import ProductCard from '../components/ProductCard'
import Marquee from 'react-fast-marquee';
import SpecialProduct from '../components/SpecialProduct';
import Service from '../components/Service';
import Category from '../components/Category';
import "./css/Home.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ContactForm from '../components/ContactForm';

function Home() {

    const products = useSelector(state => state.products.data.products)

    const productsCards = products && products.map(product => {

        return (
            <ProductCard key={product.id} {...product} />
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
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className='mb-0'>Featured Collection</h3>
                        <Link to="products" className="btn store-btn fw-bold">
                            See More <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </Link>
                    </div>
                    <>
                        <Swiper
                            spaceBetween={20}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                            }}
                            freeMode={true}
                            modules={[FreeMode, Pagination]}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1
                                },
                                600: {
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3
                                },
                                1200: {
                                    slidesPerView: 4
                                }
                            }}
                            className="mySwiper"
                        >
                            {productsCards?.slice(0, 7).map((card, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        {card}
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </>
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
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-duration="1000">
                            <div className="product-offer bg-dark p-3 rounded">
                                <div className="content text-white">
                                    <p>15% OFF</p>
                                    <h3>Smart Watch</h3>
                                    <p>From $399 or $16.62/mo for 24 mo. </p>
                                </div>
                                <img src="/images/product-offer.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        {productsCards?.slice(10, 13).map((card, index) => {
                            return (
                                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" >
                                    {card}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="marquee py-5">
                <div className="container-fluid">
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
            <section className="contact pt-5 position-relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851960224!2d0.06320772451059684!3d51.52852620113951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z2YTZhtiv2YbYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1708626335856!5m2!1sar!2seg"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="container position-absolute top-50 start-50 translate-middle">
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-8 col-lg-6">
                            <div className="p-3 rounded contact-form text-white">
                                <h4 className='text-center'>Contact US</h4>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

