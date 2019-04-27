import * as Actions from "./actions";

const initialState = {
  footerHeight: 0
};


export function rootReducer(state = initialState, action) {
  switch(action.type) {
  case Actions.SET_FOOTER_HEIGHT:
    return Object.assign({}, state, {
      footerHeight: action.payload
    });
  default:
    return state;
  }
}
