import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {/* About Section
        ================================================== */}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.png" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> Hello everyone, my name is Michael and I am Miami, FL based web developer. I recently completed Wyncode Academy's Full Stack Web development course and  have spent countless hours self-teaching in hopes of turning my new found knowledge and love for creating things into a career.
              </p><p> Whether its creating new web applications or optimizing features on existing ones I make use of my front end, back end and web design skills to help turn your vision into a reality. Any questions about me, my work or about collabrating on a project feel free to contact me directly via social media or right below using the contact form.  </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Michael Castellon</span><br />
                  <span>Mike.Castellon@icloud.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="/mike-castellon.pdf" download className="button"><i className="fa fa-download" />Download Resume</a>

                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}

      </React.Fragment>
);
}
}
