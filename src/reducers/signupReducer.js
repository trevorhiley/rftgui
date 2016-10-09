import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function signupReducer (state = initialState.signups, action) {
  switch(action.type) {
    case types.LOAD_SIGNUPS_SUCCESS:
      return action.signups;
    case types.UPDATE_SIGNUP_SUCCESS:
      return [
        ...state.filter(signup => signup.id !== action.signup.id),
        Object.assign({}, action.signup)];
    case types.CREATE_SIGNUP_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.signup)];
    default:
      return state;
  }
}
