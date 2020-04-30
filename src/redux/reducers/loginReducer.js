import {LOGIN_SUCCESS} from '../actions/ActionTypes';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default loginReducer;
