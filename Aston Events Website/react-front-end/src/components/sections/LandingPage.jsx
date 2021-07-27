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
          <p>A load of random crap about how great Aston is.
        </p>

        </section>
        <section className="ourEvents">
          <h2>Our Events</h2>
          <p>Shite about the events.</p>
        </section>

      </section>
    </main>
    )
  }
}

export default LandingPage