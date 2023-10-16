import React from "react";
import classes from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  return (
    <div className={classes["carousel-item"]}>
      <div className={classes["carousel-img"]}>
        <img src={props.img} alt="" />
      </div>
      <div className={classes["carousel-text"]}>
          <p>{props.description}</p>
        </div>
    </div>
  );
};

export default CarouselItem;
