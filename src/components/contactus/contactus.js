import React, { Component } from 'react';
import axios from  'axios';
import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


export default class Contactus extends Component {
  constructor(){
    super()

    this.state = {
      contactName: '',
      email: '',
      message: '',
      formErrors: {
        contactName: '',
        email: '',
        message: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = (e) => {
     const { name, value } = e.target;
    this.setState({ [e.target.name]: e.target.value })


    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "contactName":
        formErrors.contactName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
        case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "message":
        formErrors.message =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };



   async handleSubmit(e) {

    e.preventDefault()


    const { contactName, email, message } = this.state
    if (formValid(this.state) && e.target.checkValidity()){
      alert("Message sent successfully")
      const form = await axios.post('/api/form', {
        contactName,
        email,
        message
       })
      .then(
        this.setState({
          contactName: '',
          email: '',
          message: '',
          })
        )
    }

    else {
      alert("Not all fields filled out correctly")
    }
  }

  render() {
    const { formErrors } = this.state;

return (
    <div className="contactsection">
      <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
          <p className="lead">Feel free to contact me directly below or through any of my social media accounts.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          {/* form */}
          <div className="wrapper animated bounceInLeft">
            <Form onSubmit= { this.handleSubmit } noValidate >
              <FormGroup>
                <Label for='contactName'>Name:</Label>
                    {formErrors.contactName.length > 0 && (
                      <span className="errorMessage">{formErrors.contactName}</span>
                    )}
                  <Input
                    className={formErrors.contactName.length > 0 ? "error" : null}
                    type='text'
                    name='contactName'
                    onChange={ this.handleChange }
                    value={this.state.contactName}
                    required
                    noValidate />

              </FormGroup>

              <FormGroup>
                <Label for='email'>Email:</Label>
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                  <Input
                    className={formErrors.email.length > 0 ? "error" : null}
                    type='text'
                    name='email'
                    onChange={ this.handleChange }
                    value= {this.state.email}
                    required
                    noValidate />

              </FormGroup>

              <FormGroup>
                <Label for='message'>Message:</Label>
                    {formErrors.message.length > 0 && (
                      <span className="errorMessage">{formErrors.message}</span>
                    )}
                  <Input
                    className={formErrors.message.length > 0 ? "error" : null}
                    type='textarea'
                    name='message'
                    onChange={ this.handleChange }
                    value={ this.state.message }
                    required
                    noValidate />

              </FormGroup>
                <div>
                  <Button className="submit ">Submit</Button>
                </div>
          </Form>
        </div>
          </div>

      </div>
      </section>
    </div>
    );
  }
}
