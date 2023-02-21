import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Puslapiai
import { Home, Contact, Login, Register, Reset} from "./pages";
import  { AddProducts }  from "./pages/addProducts/AddProducts";
// Komponentai
import { Footer, Header } from "./components"

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/contact" element={<Contact />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/reset" element={<Reset />} />
<Route path="/addproducts" element={<AddProducts/>} />

</Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
