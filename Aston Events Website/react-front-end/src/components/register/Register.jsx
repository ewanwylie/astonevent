import React, { Component } from "react";
import imgSrc from '../../images/aston_uni.png'
import './index.css'
/* 
Registration is for users to sign up so they can then create events
*/
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      form: []
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    const { firstName, lastName, email, phone, password, password2 } = this.state;
    //Email validation
    if (!email.includes("@")) {
      return alert("Please enter Valid email");
    }
    //Creating JSON data for POST request to DB
    this.setState({
      form: [{ firstName, lastName, email, phone, password, password2 }]
    });
    event.preventDefault();
    fetch(`#`, {
      method: "POST",
      body: JSON.stringify(this.state.form),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      //Clearing Form
      this.setState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        password2: ""
      });
    });
  };
  render() {
    const { title, firstName, lastName, email, phone, password, password2 } = this.state;
    return (
      <section className="mainRegister">
        <div className="imgBlk"><img src={imgSrc} /></div>

        <h3>Registration Form</h3>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
                *Title:
                <select
                  className="select"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="mr">Mr</option>
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>
              </label>
            </li>
            <li>
              <label>

                <input
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>

                <input
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>

                <input
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>

                <input
                  placeholder="Mobile Number"
                  name="phone"
                  type="number"
                  value={phone}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
                        <li>
              <label>

                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
                        <li>
              <label>

                <input
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={password2}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <input type="submit" className="btn" />
          </ul>
        </form>
      </section>
    );
  }
}
export default Registration;