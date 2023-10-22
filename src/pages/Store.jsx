/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import StoreSidebar from '../components/StoreSidebar'
import "./css/Store.css"
import ProductCard from '../components/ProductCard'

function Store() {

    const [rowDivision , SetRowDivision] = useState(0)

    
    function handleStyle(e) {

        // handle active style
        const styles = document.querySelectorAll(".style")

        styles.forEach(style => {
            style.classList.remove("active")
        })
        e.target.classList.add("active")


        // handle style division
        switch (e.target.dataset.col) {
            case "4":
                SetRowDivision(3)
                break;
            case "3":
                SetRowDivision(4)
                break;
            case "2":
                SetRowDivision(6)
                break;
            case "1":
                SetRowDivision(12)
                break;
            default:
                break;
        }

        
    }
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-3">
                        <StoreSidebar />
                    </div>
                    <div className="col-9">
                        <div className="main-content bg-white rounded p-3">
                            <div className="heading mb-4 d-flex align-items-center">
                                <h6 className='mb-0 me-3'>Sort By: </h6>
                                <select className="form-select w-25 me-auto" aria-label="Default select example">
                                    <option >Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <h6 className='mb-0'>20 product</h6>
                                <div className='d-flex justify-content-between ms-3'>
                                    <img src="images/gr4.svg" alt="" className="style img-fluid active" data-col="4" onClick={handleStyle}/>
                                    <img src="images/gr3.svg" alt="" className="style img-fluid" data-col="3" onClick={handleStyle}/>
                                    <img src="images/gr2.svg" alt="" className="style img-fluid" data-col="2" onClick={handleStyle}/>
                                    <img src="images/gr.svg" alt="" className="style img-fluid" data-col="1" onClick={handleStyle}/>
                                </div>
                            </div>
                            <div className="products-list">
                                <div className="row">
                                    <div className={rowDivision ? `col-12 col-sm-6 col-md-4 col-lg-3 col-${rowDivision}` : `col-12 col-sm-6 col-md-4 col-lg-3`}>
                                        <ProductCard />
                                    </div>
                                    <div className={rowDivision ? `col-12 col-sm-6 col-md-4 col-lg-3 col-${rowDivision}` : `col-12 col-sm-6 col-md-4 col-lg-3`}>
                                        <ProductCard />
                                    </div>
                                    <div className={rowDivision ? `col-12 col-sm-6 col-md-4 col-lg-3 col-${rowDivision}` : `col-12 col-sm-6 col-md-4 col-lg-3`}>
                                        <ProductCard />
                                    </div>
                                    <div className={rowDivision ? `col-12 col-sm-6 col-md-4 col-lg-3 col-${rowDivision}` : `col-12 col-sm-6 col-md-4 col-lg-3`}>
                                        <ProductCard />
                                    </div>
                                    <div className={rowDivision ? `col-12 col-sm-6 col-md-4 col-lg-3 col-${rowDivision}` : `col-12 col-sm-6 col-md-4 col-lg-3`}>
                                        <ProductCard />
                                    </div>
                                    <div className={rowDivision ? `col-12 col-sm-6 col-md-4 col-lg-3 col-${rowDivision}` : `col-12 col-sm-6 col-md-4 col-lg-3`}>
                                        <ProductCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store
