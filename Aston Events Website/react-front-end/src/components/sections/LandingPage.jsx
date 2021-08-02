import React, { Component } from 'react';
import LazyCarousel from './Carousel'
import imgSrc from '../../images/aston_uni.png'
import './index.css';

class LandingPage extends Component {
  render() {
    return (<main className="main">
      <section className="carousel">
        <div className="imgBlk"><img src={imgSrc} /></div>
        <LazyCarousel />
      </section>
      <section className="info">
        <section className="About">
          <h2>Aston University</h2>
          <p>Our mission is to be the UK's leading university for students aspiring to succeed in business and the professions, where original research, enterprise and inspiring teaching deliver local and global impact.
        </p>

        </section>
        <section className="ourEvents">
          <h2>Our Events</h2>
          <p>Participating in an event is one of the best ways to get the most out of your time here at Aston. With sports, culture and other exiciting events we have something for everyone. Take a look to see what events we have on upcoming! Don't see anything that interests you? Register and create your own event, we love hearing your ideas for new events.</p>
        </section>

      </section>
    </main>
    )
  }
}

export default LandingPage