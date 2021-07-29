import React, { useState } from 'react';
import {Col, Row} from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import UserImage3 from '../assets/img/users3.jpeg'
import TransactionImage from '../assets/img/transactions.jpeg'
import ProjectImage from '../assets/img/project2.jpeg'

const items = [
  {
    id: 1,
    altText: 'métricas de usuarios',
    caption: 'Users',
    link: 'https://p.datadoghq.com/sb/4d9d7572-c3db-11eb-a53d-da7ad0900002-1c3b6fa3f93642622e30b16ab6e511de',
    src: UserImage3
  },
  {
    id: 2,
    altText: 'métricas de proyectos',
    caption: 'Projects',
    link: 'https://p.datadoghq.com/sb/4d9d7572-c3db-11eb-a53d-da7ad0900002-736050563ed309975cfdbb6cb7681ab1',
    src: ProjectImage
  },
  {
    id: 3,
    altText: 'métricas de transacciones',
    caption: 'Transactions',
    link: 'https://p.datadoghq.com/sb/4d9d7572-c3db-11eb-a53d-da7ad0900002-6a61f8cbab5261c7d18cfff90eb42a86',
    src: TransactionImage
  }
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
         <div
              key={index}
              onClick={() => window.open(item.link)}
              style={{cursor: "pointer"}}
            >
              <CarouselCaption className={"white"} captionText={item.altText} captionHeader={item.caption} />
              <img src={item.src} alt="img" style={{display: 'block','margin-left': 'auto','margin-right': 'auto',width: '100%'}} />
        </div>
        
      </CarouselItem>
    );
  });

  return (
    <Col sm={9} md={{ size: 9, offset: 1}}>
      <div style={{fontFamily: 'Tahoma',paddingTop: '20px',margin: 'auto',width: '10%', paddingBottom: '20px'}}>
        <h3> Métricas </h3>
      </div>
      <style>
      {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
            }`
        }
      </style>
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
    </Col>
  );
}

export default Home;