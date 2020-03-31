import { createAction } from "typesafe-actions";

// 액션 타입정의
export enum COUNTER_ACTION_TYPE {
  INCREMENT = "counter/INCREMENT",
  DECREMENT = "counter/DECREMENT"
}

export interface counterState {
  count: number;
}

// 액션 생성 함수 정의
interface incrementAction {
  type: COUNTER_ACTION_TYPE.INCREMENT;
  payload: Number;
}
interface decrementAction {
  type: COUNTER_ACTION_TYPE.DECREMENT;
  payload: Number;
}

// 초기상태 정의
const initialState: counterState = {
  count: 0
};

// 이 Action 이 매우 아리송하다.
export type COUNTER_ACTION = incrementAction | decrementAction;

export const increment = createAction(COUNTER_ACTION_TYPE.INCREMENT)<number>();

export const decrement = createAction(COUNTER_ACTION_TYPE.DECREMENT)<number>();

const COUNTER_SWITCH = (
  state: counterState = initialState,
  action: COUNTER_ACTION
) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default COUNTER_SWITCH;
