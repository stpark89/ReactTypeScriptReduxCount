import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increment, decrement, setCount } from "../modules/CounterAction";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.COUNTER_SWITCH.count);

  const increaseFn = () => {
    dispatch(increment(count));
  };

  const decrementFn = () => {
    dispatch(decrement(count));
  };

  const changeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const setCountValue: number = Number(e.currentTarget.value);
    dispatch(setCount(setCountValue));
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
      <div className="row">
        <div className="col-sm-12 text-center">
          <input
            type="number"
            onChange={changeCount}
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
