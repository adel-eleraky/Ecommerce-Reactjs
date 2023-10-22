/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/BlogCard.css"

function BlogCard() {
    return (
        <>
            <div className="blog-post border rounded mb-3" data-aos="fade-up" data-aos-duration="1000">
                <img src="images/blog-1.jpg" alt="" className="img-fluid w-100 rounded-top mb-3" />
                <div className="blog-content p-3">
                    <div className="date mb-2  text-muted">11 july 2022</div>
                    <div className="title fw-bold mb-2">A beautiful sunday morning</div>
                    <p className="content fw-light mb-3">dcscsdcdsdcsdcsdcsdcsdcsdcsdcsdcsdcsdcsdcsdcsdcsddcscsdcdsdcsdcsdcsdcsdcsdcsdcsdcsdcsdcsdcsdcsdcsd</p>
                    <button className="btn ">Read more</button>
                </div>
            </div>
        </>
    )
}

export default BlogCard
