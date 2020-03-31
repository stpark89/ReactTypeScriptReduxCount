import AddressVo from "../vo/AddressVo";

// action type 정의
export enum ADDRESS_ACTION_TYPE {
  GETLIST = "address/GETLIST"
}

export interface actionState {
  addressVoList: AddressVo[];
}

// Action 정의
interface getListAction {
  type: ADDRESS_ACTION_TYPE.GETLIST;
  payload: AddressVo[];
}

// 초기상태 정의
const initialState: actionState = {
  addressVoList: [
    {
      name: "나",
      phoneNumber: "010-1111-2222"
    }
  ]
};

export type ADDRESS_ACTION = getListAction;

const ADDRESS_SWITCH = (
  state: actionState = initialState,
  action: ADDRESS_ACTION
): actionState => {
  switch (action.type) {
    case ADDRESS_ACTION_TYPE.GETLIST:
      console.log("ADDRESS_ACTION_TYPE.GETLIST 호출");
      return state;
    default:
      return state;
  }
};

export default ADDRESS_SWITCH;
