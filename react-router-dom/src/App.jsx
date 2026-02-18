import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className=' min-h-screen bg-black text-white'> {/*route work for every rout and routes is a container*/}

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
