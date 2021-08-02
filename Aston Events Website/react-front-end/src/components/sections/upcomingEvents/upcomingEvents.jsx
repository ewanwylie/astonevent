import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgSrc from '../../../images/aston_uni.png'
import './index.css'

class UpcomingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      events: [
        {
          category: 'Sport', name: 'Football', datetime: '28/07/2021 15:00', description: 'Insert text here', place: 'Birmingham', picture: 'https://via.placeholder.com/150'
        },

        {
          category: 'Sport', name: 'Football', datetime: '28/07/2021 15:00', description: 'Insert text here', place: 'Birmingham', picture: 'https://via.placeholder.com/150'
        },

        {
          category: 'Sport', name: 'Football', datetime: '28/07/2021 15:00', description: 'Insert text here', place: 'Birmingham', picture: 'https://via.placeholder.com/150'
        },

        {
          category: 'Sport', name: 'Football', datetime: '28/07/2021 15:00', description: 'Insert text here', place: 'Birmingham', picture: 'https://via.placeholder.com/150'
        }
      ]
    })
  }

  render() {
    const { category, name, datetime, description, place, picture } = this.state.events;
    /*function filter() {
      <div>
        {category.filter(category => category.includes('Sport')).map(filteredCategory => (
          <li>
            {filteredCategory}
          </li>
        ))
      </div>*/
      return (
        <section className="eventsSection">
          <h2>List of Upcoming Events</h2>
          {this.state.events.map((event) => {

            <article className="event_details">

              <div className="event_content">
                <div className="category"><span className="bold">Category : </span><span>{event.category}</span></div>
                <div className="name"><span className="bold">Event Name : </span><span>{event.name}</span></div>
                <div className="datetime"><span className="bold">Date & Time : </span><span>{event.datetime}</span></div>
                <div className="description"><span className="bold">Description : </span><span>{event.description}</span></div>
                <div className="place"><span className="bold">Location: </span><span>{event.place}</span></div>
                <div className="event_picture">
                <img src={event.picture} />
                </div>
                <button className="interestranking">Interested?</button>
              </div>
            </article>
          })}
        </section>
      )
    }
  }

  export default UpcomingEvents