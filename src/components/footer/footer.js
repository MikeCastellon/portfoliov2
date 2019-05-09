import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/* footer
 ================================================== */}
        <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/michael-castellon/"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://github.com/MikeCastellon"><i className="fa fa-github" /></a></li>
            <li><a href="https://www.instagram.com/_dont_hate_appreciate/"><i className="fa fa-instagram" /></a></li>
            <li><a href="https://www.facebook.com/mike.castellon"><i className="fa fa-facebook" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019 Michael Castellon</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
        </footer> {/* Footer End*/}

      <footer id="home">
        ....
      </footer>
      </React.Fragment>
    );
  }
}
