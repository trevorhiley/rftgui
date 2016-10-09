import {combineReducers} from 'redux';
import signups from './signupReducer';
import authors from './authorReducer';
import ajaxStates from './ajaxReducer';

const rootReducer = combineReducers({
  signups,
  authors,
  ajaxStates
});

export default rootReducer;
