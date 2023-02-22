import React, { useState } from "react";
import "components/DayListItem.scss";
import classNames from "classnames";


export default function DayListItem(props) {
  
  const formatSpots = () => {
    if (props.spots === 0) {
      return "no spots remaining";
    }
    if (props.spots === 1) {
      return "1 spot remaining";
    }
    if (props.spots > 1) {
      return `${props.spots} spots remaining`;
    }
  }
  
  let classType = "";
  if (props.selected) {
    classType = "--selected";
  }
  if (props.spots === 0) {
    classType = "--full";
  }
  const dayClass = classNames(`day-list__item${classType}`);

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
