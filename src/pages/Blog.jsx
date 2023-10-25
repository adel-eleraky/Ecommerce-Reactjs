/* eslint-disable no-unused-vars */
import React from 'react'
import BlogCard from '../components/BlogCard'

function Blog() {
    return (
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <BlogCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <BlogCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <BlogCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <BlogCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <BlogCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <BlogCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <BlogCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
