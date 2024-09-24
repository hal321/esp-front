import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='What we offer' title='You can choose from below which field you want us to help you with.'/>
      <Programs/>
      <About/>
        <Title subTitle='TESTIMONIALS' title='What students say about our services.'/>
        <Testimonials/>
           <Title subTitle='Contact US' title='You can get intouch with our consultant by dropping us a message and we will get back to you soon'/>
           <Contact/>
           <Footer/>
      </div>
    </div>
  )
}

export default App