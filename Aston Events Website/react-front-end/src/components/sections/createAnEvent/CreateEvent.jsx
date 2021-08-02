import React, { Component } from "react";
import imgSrc from '../../../images/aston_uni.png'
import './index.css'

class CreateAnEvent extends Component {
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
    const { category, name, datetime, description, place, picture } = this.state;


    //Creating JSON data for POST request to DB
    this.setState({
      form: [{ category, name, datetime, description, place, picture }]
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
    const { category, name, datetime, description, place, picture } = this.state;
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
                  Select category
                  </option>
                  <option value="sport">Sport</option>
                  <option value="culture">Culture</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </li>
            <li>
              <label>
                *Event Name:
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
                *Event Date & Time:
                <input
                  placeholder="DateandTime"
                  name="datetime"
                  type="datetime-local"
                  value={datetime}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
            <li>
              <label>
                *Event Description:
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
                *Where is the event:
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
              <label for="formFile">
                Upload an optional image for your event:
                <input
                  class="form-control"
                  placeholder="Picture"
                  name="img"
                  type="file"
                  id="formFile"
                  multiple accept="image/jpg, image/jpeg"
                  value={picture}
                  onChange={this.handleChange}
                  notrequired
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
export default CreateAnEvent;