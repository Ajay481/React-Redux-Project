import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div className={classes.counter}>
      <div className={classes.value}>
        <h1>Redux Counter</h1>
        <h2>{counter}</h2>
        <div>
          <button onClick={incrementHandler}>Increment by 5</button>
          <button onClick={decrementHandler}>Decrement by 5</button>
        </div>
      </div>
    </div>
  );
};
