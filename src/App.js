import React from 'react';
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Footer from '../src/components/Footer';
import './App.css';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';



const App = () => {
   

    return (
        <>
        <Nav />
        <Hero />
        <About />
        <Portfolio/>
        <Certifications/>
        <Footer />
    
        </>
    )
}

export default App
