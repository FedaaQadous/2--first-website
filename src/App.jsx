import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx';
import avatar from './assets/avatar.svg'
import Footer from './components/footer/Footer.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
function App() {
  return (
    <>
    <Navbar/>
    <Hero />
       <Routes>
      <Route path='/portfolio' element={<Portfolio/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
     <Route path='/contact' element={<Contact/>}> </Route>
    </Routes>
    <Footer/>
  
    
  
  
   </>
   

  )
}

export default App;