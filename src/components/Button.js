import React from "react";
import classnames from 'classnames';

import "components/Button.scss";

export default function Button(props) {
   //add css class conditionally
   // let buttonClass = "button";
 
   // if (props.confirm) {
   // //   buttonClass += " button--confirm";
   // buttonClass = classNames(buttonClass, "button--confirm");
   // }

   // if(props.danger) {
   //    // buttonClass += " button--danger"
   //    buttonClass = classNames(buttonClass, "button--danger");
   // }

   const buttonClass = classnames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
    });
 
   return <button disabled ={props.disabled} onClick={props.onClick} className={buttonClass}>{props.children}</button>;
 }