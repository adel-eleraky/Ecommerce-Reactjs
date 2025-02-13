/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./css/StoreSidebar.css"
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

function StoreSidebar() {

    const [searchParams, setSearchParams] = useSearchParams()
    const categories = useSelector(state => state.categories.data)

    console.log(categories)
    const handleSearchParams = (name, value) => {

        const newSearchParams = new URLSearchParams(searchParams.toString())
        newSearchParams.set(name, value)
        setSearchParams(newSearchParams)
    }

    const reactStarElements = []
    for (let i = 1; i <= 5; i++) {

        reactStarElements.push(
            <div key={i} className='rating-element' onClick={() => handleSearchParams("rating", i)}>
                <ReactStars count={5} size={24} value={i} edit={false} activeColor="#ffd700" />
            </div>
        )
    }

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-filter bg-white rounded p-3 mb-3">
                    <h5 className='mb-4'>Filter By</h5>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span" className='fw-bold'>Categories</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {categories && categories.map((category, index) => {
                                return (
                                    <p className="category-item mb-0" key={index}>
                                        <Link to={`/products/${category.slug}`} className="d-block text-dark p-2">{category.name}</Link>
                                    </p>
                                )
                            })}
                        </AccordionDetails>
                    </Accordion>
                    <div className="price py-3 ms-2 mb-3 border-top border-3">
                        <h6 className='mb-3'>Price</h6>
                        <div className="inputs">
                            <input type="number" name="priceFrom" className="form-control mb-2" placeholder="From" onChange={(e) => handleSearchParams(e.target.name, e.target.value)} />
                            <input type="number" name="priceTo" className="form-control" placeholder="To" onChange={(e) => handleSearchParams(e.target.name, e.target.value)} />
                        </div>
                    </div>
                    <div className="rating py-3 ms-2 mb-3 border-top border-3">
                        <h6 className='mb-3'>Rating</h6>
                        <div className="ratings">
                            {reactStarElements}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreSidebar
