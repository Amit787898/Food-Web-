import React from "react";
import cardCss from "./Card.module.css";

function Card(props) {
  return <div className={cardCss.card}>{props.children}</div>;
}

export default Card;
