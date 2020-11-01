// core
import { combineReducers } from 'redux';

// reducers
import { authReducer } from '../auth/reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
})
