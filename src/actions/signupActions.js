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
