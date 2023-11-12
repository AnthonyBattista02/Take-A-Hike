//import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ChooseYourTrail from "./ChooseYourTrailHome"
import UserTrailData from "./UserTrailDataHome"
import Footer from "./Footer";

//import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/2Step-Hike.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

//import CarouselCaption from 'react-bootstrap/CarouselCaption'
//import CarouselItem from 'react-bootstrap/CarouselItem'

// function Home() {
//   return (
//     <Carousel fade>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400', 
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://picsum.photos/id/123/1200/400', 
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://picsum.photos/id/123/1200/400', 
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <ChooseYourTrail />
      <UserTrailData />
      <Footer />
    </div>
  );
}

export default Home;
