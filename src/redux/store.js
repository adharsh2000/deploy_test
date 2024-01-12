import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import global from './slice/globalState'


const reducer = combineReducers({
  'global':global,

});
const store = configureStore({
  reducer,
});
export default store;
