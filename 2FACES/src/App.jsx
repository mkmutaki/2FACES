import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Market from './pages/Market.jsx'
import About from './pages/About'
import Collections from './pages/Collections.jsx'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './components/Login.jsx'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import Designers from './pages/Designers.jsx'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[3vw]'>
      
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/market' element={<Market/>} />
        <Route path='/designers' element={<Designers/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path = '/cart' element={<Cart/>} />  
        <Route path = '/login' element={<Login/>} />  
        <Route path = '/place-order' element={<PlaceOrder/>} />  
        <Route path = '/orders' element={<Orders/>} />  
      </Routes>
      <Footer />
    </div>
  )
}

export default App
