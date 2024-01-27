/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import Footer from './Footer'
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";
import { fetchingProducts } from '../rtk/Slices/ProductSlice';

function Layout() {

	const dispatch = useDispatch()

	const [loading, setLoading] = useState(true)

	React.useEffect(() => {

		dispatch(fetchingProducts()).then(() => setLoading(false))
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
				</>
			}
		</>
	)
}

export default Layout
