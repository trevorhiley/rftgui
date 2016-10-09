import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {ajaxLoading} from './ajaxActions';

export function loadAuthorsSuccess (authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors};
}


export function loadAuthors() {
  return function(dispatch) {
    dispatch(ajaxLoading());
    return authorApi.getAllAuthors().then(authors=> {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
