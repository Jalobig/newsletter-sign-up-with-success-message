import React from "react";
import Button from "../Button/Button";
import classes from "./Success.module.scss";
import IconSuccess from '../../assets/images/icon-success.svg'

const Success = (props) => {
  return (
    <div className={classes.success__section}>
        <div className={classes.animation__group}>
      <img src={IconSuccess} alt="Icon of success" className={classes.success__icon}/>
      <div className={classes.animation__pop}></div>
        </div>
      <h1 className="heading--1">Thanks for subscribing!</h1>
      <p className={`text ${classes.success__text}`}>
        A confirmation email has been sent to <span>{props.email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <form onSubmit={props.toggleSubmit} >
      <Button>Dismiss message</Button>
      </form>
    </div>
  );
};

export default Success;
