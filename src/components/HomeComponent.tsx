import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increment, decrement } from "../modules/CounterAction";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.COUNTER_SWITCH.count);

  const increaseFn = () => {
    dispatch(increment(count));
  };

  const decrementFn = () => {
    dispatch(decrement(count));
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>HomeComponent</h1>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1>My Counter {count}</h1>
          <button className="btn btn-info" onClick={increaseFn}>
            +
          </button>
          <button className="btn btn-success" onClick={decrementFn}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
