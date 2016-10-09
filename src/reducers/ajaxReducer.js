import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxReducer (state = initialState.ajaxStates, action) {
  if (action.type == types.AJAX_LOADING) {
    return state + 1;
  }
  else if (action.type.substring(action.type.length - 7) == "SUCCESS") {
    return state - 1;
  }
  return state;
}
