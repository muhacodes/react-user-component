import React from "react";
import { useState } from "react";

import Card from "../UI/Card";
// import './AddUser.css';

// import classes from './AddUser.module.css';
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [username, setText] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };
  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title : 'invalid input',
        message : 'please enter valid username and age !'
      });
      return;
    }
    if (age < 1) {
      setError({
        title : 'invalid age',
        message : 'please enter valid age !'
      });
      return;
    }

    props.onAddUser(username, age);
    console.log(username, age);
    setAge("");
    setText("");
  };

  const changeUsername = (event) => {
    setText(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {error && <Modal onChange={errorHandler} title={error.title} message={error.message}></Modal> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username </label>
          <input
            id="username"
            value={username}
            type="text"
            onChange={changeUsername}
          />

          <label htmlFor="age"> age </label>
          <input id="age" value={age} type="number" onChange={changeAge} />

          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
