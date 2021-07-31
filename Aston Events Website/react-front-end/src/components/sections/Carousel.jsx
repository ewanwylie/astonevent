import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './index.css'
//import picture01 from '../../images/.jpg'
//import picture02 from '../../images/.jpg'
//import picture03 from '../../images/.jpg'
//import picture04 from '../../images/.jpg'
//import picture05 from '../../images/.jpg'

//still to complete section

class LazyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselInfos: [
        {
          //picture01 etc...
          imgSrc: 'https://via.placeholder.com/150',
          legend: 'jobby'
        },
        {
          imgSrc: 'https://via.placeholder.com/150',
          legend: 'cetch'
        },
        {
          imgSrc: 'https://via.placeholder.com/150',
          legend: 'eree is'
        },
        {
          imgSrc: 'https://via.placeholder.com/150',
          legend: 'jiy'
        },
        {
          imgSrc: 'https://via.placeholder.com/150',
          legend: 'covid'
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