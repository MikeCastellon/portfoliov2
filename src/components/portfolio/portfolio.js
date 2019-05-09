import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (

      <div>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    <img alt="" src="images/portfolio/beautify-screenshot.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Beautify</h5>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02">
                    <img alt="" src="images/portfolio/brewfinder-screenshot.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Brewfinder</h5>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
                </div>
                <div id="modal-01" className="popup-modal mfp-hide">
                  <div className="description-box">
                    <h4>Beautify</h4>
                    <p>HTML, CSS, Ruby on Rails, and React web application that connects local businesses to artists. Beautify allows local businesses to create a listing for a space they are trying to add original art too, then artists have the ability to make offers on these listings, finally once the local business finds an artist they like they are able to accept offer and complete payment all through the web interface. Beautify uses Ruby on Rails for the backend, React for search functionality, and an interactive image carousel, stripe api for payments, and devise Ruby gem for the user authentication. </p>
                  </div>
                  <div className="link-box">
                    <a href="https://beautifyapp.herokuapp.com/">Link</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>
                </div>
                <div id="modal-02" className="popup-modal mfp-hide">
                  <div className="description-box">
                    <h4>Brewfinder</h4>
                    <p>HTML, CSS, and React web application using a brewery database api, and mapbox api. Gives you the ability to search for breweries by city in the United States.</p>
                    </div>
                  <div className="link-box">
                    <a href="https://brewfinder-v1.herokuapp.com/">Link</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
                </div>
                </div>


              <div className="row skill">
                <div className="item-wrap">
                  <h1><span>Skills</span></h1>
                </div>
                <div className="item-wrap">
                  <div className="bars">
                    <ul className="skills">
                      <li><span className="bar-expand html5" /><em>HTML5</em></li>
                      <li><span className="bar-expand css" /><em>CSS</em></li>
                      <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                      <li><span className="bar-expand react" /><em>React</em></li>
                      <li><span className="bar-expand rubyonrails" /><em>Ruby on Rails</em></li>
                      <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                      <li><span className="bar-expand sql" /><em>SQL</em></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>


    );
  }
}
