import { combineReducers } from 'redux';

import loginUserReducer from './loginUserData/loginUserReducer';


const rootReducer = combineReducers({
   
    loginUser: loginUserReducer,
    
});

export default rootReducer;