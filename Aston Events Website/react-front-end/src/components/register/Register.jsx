import React, { Component } from "react";
import imgSrc from '../../images/cyf_brand.png'
import './index.css'
/* 
Registration is for users to sign up  quickly with minimum 
info needed. Once a user is created they can add to their profile
via the Profile section to add fields:  
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
      form: []
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    const { firstName, lastName, email, phone } = this.state;
    //Email validation
    if (!email.includes("@")) {
      return alert("Please enter Valid email");
    }
    //Creating JSON data for POST request to DB
    this.setState({
      form: [{ firstName, lastName, email, phone }]
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
        phone: ""
      });
    });
  };
  render() {
    const { title, firstName, lastName, email, phone } = this.state;
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
                  type="text"
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
                  type="text"
                  value={phone}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
          </ul>
        </form>
      </section>
    );
  }
}
export default Registration;