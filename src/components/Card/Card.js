import React from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <main
      style={{
        margin: props.margin,
      }}
      className={`${classes.card} ${props.className}`}
    >
      {props.children}
    </main>
  );
};

export default Card;
