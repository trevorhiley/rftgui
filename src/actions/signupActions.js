import * as types from './actionTypes';
import signupApi from '../api/mockCourseApi';

export function loadSignupsSuccess (signups) {
  return { type: types.LOAD_SIGNUPS_SUCCESS, signups};
}


export function loadSignups() {
  return function(dispatch) {
    return signupApi.getAllCourses().then(signups=> {
      dispatch(loadSignupsSuccess(signups));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateSignupSuccess(signup) {
  return { type: types.UPDATE_SIGNUP_SUCCESS, signup}
}

export function createSignupSuccess(signup) {
  return { type: types.CREATE_SIGNUP_SUCCESS, signup}
}

export function saveSignup(signup) {
  return function(dispatch, getState) {
    return signupApi.saveCourse(signup).then(savedSignup => {
      signup.id ? dispatch(updateSignupSuccess(savedSignup)) :
      dispatch(createSignupSuccess(savedSignup));
    }).catch(error => {
      throw(error);
    });
  };
}
