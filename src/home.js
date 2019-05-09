import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';

class Home extends Component {
  render(){
    return(
      <div className="home">
        <Header />
        <About />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    )
  }
}

export default Home
