import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Store from "./pages/Store"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}/>
                        <Route path="products" element={<Store />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
