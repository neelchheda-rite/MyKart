import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './userReducer.js';


 const rootReducer=combineReducers({
    user:userReducer,
});

export default rootReducer;