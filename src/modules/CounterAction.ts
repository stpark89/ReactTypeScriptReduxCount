import { createAction } from "typesafe-actions";

// 액션 타입정의
export enum COUNTER_ACTION_TYPE {
  GETCOUNT = "counter/GETCOUNT",
  INCREMENT = "counter/INCREMENT",
  DECREMENT = "counter/DECREMENT",
  SETCOUNT = "counter/SETCOUNT"
}

export interface counterState {
  count: number;
}

// 액션 생성 함수 정의
interface getCountAction {
  type: COUNTER_ACTION_TYPE.GETCOUNT;
  payload: number;
}

interface incrementAction {
  type: COUNTER_ACTION_TYPE.INCREMENT;
  payload: number;
}
interface decrementAction {
  type: COUNTER_ACTION_TYPE.DECREMENT;
  payload: number;
}

interface setCountAction {
  type: COUNTER_ACTION_TYPE.SETCOUNT;
  payload: number;
}

// 초기상태 정의
const initialState: counterState = {
  count: 0
};

// 이 Action 이 매우 아리송하다.
export type COUNTER_ACTION =
  | getCountAction
  | incrementAction
  | decrementAction
  | setCountAction;

// 이거는 View Component 에서 함수 호출할떄 이걸 쓴다. createAction 하면서... 이놈은 ???
export const increment = createAction(COUNTER_ACTION_TYPE.INCREMENT)<number>();
export const decrement = createAction(COUNTER_ACTION_TYPE.DECREMENT)<number>();
export const setCount = createAction(COUNTER_ACTION_TYPE.SETCOUNT)<number>();

const COUNTER_SWITCH = (
  state: counterState = initialState,
  action: COUNTER_ACTION
): counterState => {
  switch (action.type) {
    case COUNTER_ACTION_TYPE.GETCOUNT:
      return state;

    case COUNTER_ACTION_TYPE.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case COUNTER_ACTION_TYPE.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case COUNTER_ACTION_TYPE.SETCOUNT:
      return {
        ...state,
        count: action.payload
      };

    default:
      return state;
  }
};

export default COUNTER_SWITCH;
