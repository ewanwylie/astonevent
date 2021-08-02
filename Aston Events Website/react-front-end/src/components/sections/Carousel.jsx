import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './index.css'
import picture01 from '../../images/picture01.jpg'
import picture02 from '../../images/picture02.jpg'
import picture03 from '../../images/picture03.jpg'
import picture04 from '../../images/picture04.jpg'
import picture05 from '../../images/picture05.jpg'

//still to complete section

class LazyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselInfos: [
        {
          imgSrc: picture01,
          legend: 'Aston Students Union'
        },
        {
          imgSrc: picture02,
          legend: 'Clubs'
        },
        {
          imgSrc: picture03,
          legend: 'Sports'
        },
        {
          imgSrc: picture04,
          legend: 'Fundraise'
        },
        {
          imgSrc: picture05,
          legend: 'Volunteer'
        }
      ]

    }
  }
  render() {
    const { carouselInfos } = this.state;
    return (
      <Carousel>
        {carouselInfos.map(carouselBlock =>
          <div className="imgBox">
            <img src={carouselBlock.imgSrc} alt="image carousel" />
            <p className="legend">{carouselBlock.legend}</p>
          </div>
        )}

      </Carousel>
    );
  }
}

export default LazyCarousel;