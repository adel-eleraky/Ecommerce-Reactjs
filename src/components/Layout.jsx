/* eslint-disable no-unused-vars */
import React, { useState , useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Footer from './Footer'
import Header from './Header';
import { useDispatch } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";
import { fetchingProducts } from '../rtk/features/ProductSlice';
import { fetchingCategories } from '../rtk/features/CategorySlice';
import { ToastContainer } from 'react-toastify';

function Layout() {

	const dispatch = useDispatch()

	const [loading, setLoading] = useState(true)

	useEffect(() => {

		dispatch(fetchingProducts())
		dispatch(fetchingCategories()).then(() => setLoading(false))
	}, [])

	return (
		<>
			{loading ?
				<div className='loading-screen position-absolute top-50 start-50 translate-middle'>
					<HashLoader
						color={"#2b273e"}
						loading={loading}
						cssOverride={true}
						size={150}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div> :
				<>
					<Header />
					<Outlet />
					<Footer />
					<ToastContainer />
				</>
			}
		</>
	)
}

export default Layout
