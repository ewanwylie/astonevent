import React, { Component } from "react";
import imgSrc from '../../images/aston_uni.png'
import './index.css'

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      name: "",
      datetime: "",
      description: "",
	  place: "",
      picture: "",
      form: []
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    const { category, name, description, place, picture } = this.state;


    //Creating JSON data for POST request to DB
    this.setState({
      form: [{ category, name, description, place, picture }]
    });
    event.preventDefault();
    fetch(`#`, {
      method: "POST",
      body: JSON.stringify(this.state.form),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      //Clearing Form
      this.setState({
      category: "",
      name: "",
      datetime: "",
      description: "",
	  place: "",
      picture: ""
      });
    });
  };
  render() {
    const { category, name, description, place, picture } = this.state;
    return (
      <section className="createEvent">
        <div className="imgBlk"><img src={imgSrc} /></div>

        <h3>Create An Event</h3>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
                *Category:
                <select
                  className="select"
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="sport">Sport</option>
                  <option value="culture">Culture</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </li>
            <li>
              <label>

                <input
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>

                <input
                  placeholder="Description"
                  name="description"
                  type="text"
                  value={description}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>

                <input
                  placeholder="Place"
                  name="place"
                  type="text"
                  value={place}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>

                <input
                  placeholder="Picture"
                  name="picture"
                  type="text"
                  value={picture}
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
export default CreateEvent;