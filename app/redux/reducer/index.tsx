import { combineReducers } from "redux";

const sitedata = (state = {}, action) => {
  const setdata = { ...state, ...action.payload };
  switch (action.type) {
    case "DATA":
      return setdata;
    default:
      return state;
  }
};

export const allreducer = combineReducers({
  sitedata: sitedata,
});
