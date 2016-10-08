import * as types from './actionTypes';

export function createSignup (signup) {
  return { type: types.CREATE_SIGNUP, signup};
}
