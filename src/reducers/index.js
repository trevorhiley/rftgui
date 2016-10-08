import {combineReducers} from 'redux';
import signups from './signupReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  signups,
  authors
});

export default rootReducer;
