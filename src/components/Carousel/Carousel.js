import React, { useState } from "react";
import classes from "./Carousel.module.css";
import CarouselItem from "./CarouselItem";
import slide1 from "../../assets/147476.jpg";
import slide2 from "../../assets/city.jpg";
import slide3 from "../../assets/flower-7680x4320-rose-8k-17903.jpg";
import slide4 from "../../assets/tiger-3840x2160-cute-animals-4k-16738.jpg";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Container from "../UI/Container";
const items = [
  {
    id: "c1",
    description: "Slide1",
    img: slide1,
  },
  {
    id: "c2",
    description: "Slide2",
    img: slide2,
  },
  {
    id: "c3",
    description: "Slide3",
    img: slide3,
  },
  {
    id: "c4",
    description: "Slide4",
    img: slide4,
  },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);


  const nextSlideHaandler = () => {
    if(activeSlide + 1 > items.length - 1) {
      setActiveSlide(0)
    } else {
      setActiveSlide(activeSlide + 1)
    }
  }

  const prevSlideHandler = () => {
    if(activeSlide === 0) {
      setActiveSlide(items.length - 1)
    } else {
      setActiveSlide(activeSlide - 1)
    }
  }
  return (
    <Container>
      <div className={classes.carousel}>
        <div
          className={classes.inner}
          style={{ transform: `translate(-${activeSlide * 100}%)` }}
        >
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
        <div className={classes["carousel-buttons"]}>
          <button
            className={classes["arrow-btn"]}
            onClick={prevSlideHandler}
          >
            <GrFormPrevious />
          </button>
          <div className={classes.indicators}>
            {items.map((item, index) => (
              <button
                onClick={() => {
                  setActiveSlide(index);
                }}
              >
                {index === activeSlide ? (
                  <BiRadioCircleMarked />
                ) : (
                  <BiRadioCircle />
                )}
              </button>
            ))}
          </div>
          <button
            className={classes["arrow-btn"]}
            onClick={nextSlideHaandler}
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
