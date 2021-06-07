import React from "react";
import classnames from 'classnames';
import "components/DayListItem.scss";


export default function DayListItem(props) {
  
  const dayListItemClass = classnames("day-list__item",{
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots===0
  })

  // let dayListItemClass = classnames("day-list__item");

  // if(props.selected) {
  //   dayListItemClass += "--selected";
  // }
  // if(props.spots === 0){
  //   dayListItemClass += "--full";
  //}
  return (
    <li className ={dayListItemClass} selected={props.selected} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}