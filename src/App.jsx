import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "mdb-ui-kit/css/mdb.min.css"
import "mdb-ui-kit/js/mdb.min.js"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Layout />}>
                        <Route index element={<Home />}/>
                        <Route path="products" element={<Store />}/>
                        <Route path="blog" element={<Blog />}/>
                        <Route path="login" element={<Login />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
