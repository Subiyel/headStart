import { combineReducers } from 'redux';
import * as types from "../actions/types";

const INITIAL_STATE = {
  isLoggedIn: false,
  email: '',
  id: 0,
  username: null,
  profilePic: '',
  is_banned: false,
  banned_date: '',
  fcm_token: '',
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {



    case types.LOGIN: { console.log( state ," in reducer",action.data );
      return {
        ...state,
        username: action.data.name,
      };
    }



    default:
      return state
  }
};

export default combineReducers({
  appReducer: appReducer,
});