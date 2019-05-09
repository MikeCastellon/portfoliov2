import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
              <header id="home">
                <nav id="nav-wrap">
                  <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                  <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                  <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                  </ul> {/* end #nav */}


                </nav> {/* end #nav-wrap */}
                <div className="row banner">
                  <div className="banner-text">
                    <h1 className="responsive-headline">I'm Michael Castellon.</h1>
                    <h3>Full Stack Web Developer based out of Miami, FL. To learn more about me click below</h3>
                    <hr />
                    <ul className="social">
                      <li><a href="https://www.linkedin.com/in/michael-castellon/"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="https://github.com/MikeCastellon"><i className="fa fa-github" /></a></li>
                      <li><a href="https://www.instagram.com/_dont_hate_appreciate/"><i className="fa fa-instagram" /></a></li>
                      <li><a href="https://www.facebook.com/mike.castellon"><i className="fa fa-facebook" /></a></li>

                    </ul>
                  </div>
                </div>
                <p className="scrolldown">
                  <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
              </header> {/* Header End */}

              <header id="home">
                ....
              </header>
              </React.Fragment>
            );
          }
        }
