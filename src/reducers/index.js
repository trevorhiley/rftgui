import {combineReducers} from 'redux';
import signups from './signupReducer';

const rootReducer = combineReducers({
  signups
});

export default rootReducer;
