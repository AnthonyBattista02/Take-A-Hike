import ChooseYourTrail from "./ChooseYourTrailHome"
import UserTrailData from "./UserTrailDataHome";
import Footer from "./Footer";
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
    src: 'https://i0.wp.com/iconiclife.com/wp-content/uploads/2020/04/find-the-best-hiking-spots-in-the-world.jpg?fit=1100%2C749&ssl=1', 
    //altText: 'Slide 1',
    //caption: 'Slide 1'
  },
  {
    src: 'https://hips.hearstapps.com/hmg-prod/images/sunny-day-on-na-pali-coast-from-from-kalalau-trail-royalty-free-image-1591628718.jpg?crop=1.00xw:0.753xh;0,0.177xh&resize=980:*', 
    //altText: 'Slide 2',
    //caption: 'Slide 2'
  },
  {
    src: 'https://hips.hearstapps.com/hmg-prod/images/horseshoe-bend-royalty-free-image-1591628438.jpg?crop=1.00xw:0.753xh;0,0.140xh&resize=980:*', 
    //altText: 'Slide 3',
    //caption: 'Slide 3'
  },
  
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
