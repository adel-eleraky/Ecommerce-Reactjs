import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Signup from "./pages/Signup"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"
import { Provider } from "react-redux"
import store from "./rtk/Store"
import Wishlist from "./pages/Wishlist"

AOS.init();

function App() {


    return (
        <>
            <Provider store={store} >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="products/:category?" element={<Store />} />
                            <Route path="product/:productId" element={<ProductDetails />} />
                            <Route path="blog" element={<Blog />} />
                            <Route path="login" element={<Login />} />
                            <Route path="sign-up" element={<Signup />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="wishlist" element={<Wishlist />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>

    )
}

export default App
