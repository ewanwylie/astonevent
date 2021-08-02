import React, { Component } from "react";
import './index.css'
import imgSrc from '../../images/aston_uni.png'


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      form: []
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    const { email, password } = this.state;
    //Data Validation
    if (!email.includes("@")) {
      return alert("Please enter valid email");
    }
    //Creating JSON form to send to DB
    this.setState({
      form: [{ email, password }]
    });
    event.preventDefault();
    //Post Request
    fetch(`#`, {
      method: "POST",
      body: JSON.stringify(this.state.form),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      //Clearing Form
      this.setState({
        email: "",
        password: ""
      });
    });
  };
  render() {
    return (
      <section className="mainRegister">
        <div className="imgBlk"><img src={imgSrc} /></div>

        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmit} className="signinForm">
          <ul>
            <li>
              <label>

                <input
                  name="email"
                  type="text"
                  placeholder="Email Address"
                  onChange={this.handleChange} />
              </label>
            </li>
            <li>
              <label>

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange} />
              </label>
            </li>
          </ul>
          <button className="btn" type="submit">Log In</button>
        </form>
      </section>
    );
  }
}
export default SignIn;