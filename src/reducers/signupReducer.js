import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function signupReducer (state = initialState.signups, action) {
  switch(action.type) {
    case types.LOAD_SIGNUPS_SUCCESS:
      return action.signups;
    default:
      return state;
  }
}
