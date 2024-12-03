import React from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import About from './page/about/About'
import Service from './page/service/Service'
import Property from './page/property/Property'
import Contact from './page/contact/Contact'
import Newsletter from './page/newsletter/Newsletter'
import Footer from './page/footer/Footer'



function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Property />
        <Contact />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default App