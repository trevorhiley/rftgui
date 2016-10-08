import * as types from '../actions/actionTypes';

export default function signupReducer (state = [], action) {
  switch(action.type) {
    case types.CREATE_SIGNUP:
      return [...state,
        Object.assign({}, action.signup)
      ];
    default:
      return state;
  }
}
