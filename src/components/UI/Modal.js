import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
        <div onClick={props.onChange} className={classes.backdrop}>  </div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2> {props.title} </h2>
        </header>
        <div className={classes.content}>
          <p> {props.message} </p>
        </div>

        <footer className={classes.actions}>
          <Button onclick={props.onChange} > Close </Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
