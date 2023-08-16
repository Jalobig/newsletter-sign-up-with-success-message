import React from "react";
import Button from "../Button/Button";
import IllustrationDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import Illustrationmobile from "../../assets/images/illustration-sign-up-mobile.svg";
import IconList from "../../assets/images/icon-list.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./Newsletter.module.scss";
import useInput from "../../hooks/useInput";
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Newsletter = (props) => {
  const media = useMediaQuery("only screen and (max-width:950px");
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    onBlurInputHandler: emailOnBlurHandler,
    reset: emailReset,
  } = useInput((email) => regEmail.test(email));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!emailIsValid) {
      return;
    }
    props.toggleSubmit(enteredEmail);
    emailReset();
  };
  const emailClasses = `${classes.form__input} ${
    !emailHasError ? "" : classes.form__invalid
  }`;
  return (
    <div className={classes.newsletter}>
      <div className={classes.newsletter__info}>
        <h1 className="heading--1">Stay updated!</h1>
        <p className="text">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className={classes.newsletter__list}>
          <li className={classes["newsletter__list-item"]}>
            <img
              src={IconList}
              alt="Icon of a check"
              className={classes["newsletter__list--icon"]}
            />
            Product discovery and building what matters
          </li>
          <li className={classes["newsletter__list-item"]}>
            <img
              src={IconList}
              alt="Icon of a check"
              className={classes["newsletter__list--icon"]}
            />
            Measuring to ensure updates are a success
          </li>
          <li className={classes["newsletter__list-item"]}>
            <img
              src={IconList}
              alt="Icon of a check"
              className={classes["newsletter__list--icon"]}
            />
            And much more!
          </li>
        </ul>
        <form onSubmit={formSubmitHandler} className={classes.form}>
          <div className={classes.form__row}>
            <label htmlFor="email" className={classes.form__label}>
              Email address
            </label>
            {emailHasError && (
              <p className={classes["form__error-text"]}>
                Valid email required
              </p>
            )}
          </div>

          <input
            placeholder="email@company.com"
            type="email"
            name="email"
            className={emailClasses}
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
          />
        <Button>Subscribe to monthly newsletter</Button>
        </form>
      </div>
      <img
        src={media ? Illustrationmobile : IllustrationDesktop}
        alt="Illustration"
        className={classes.image}
      />
    </div>
  );
};

export default Newsletter;
