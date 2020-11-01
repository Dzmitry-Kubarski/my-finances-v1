// types sync
import { SELECT_ACTIVE_REGISTER_FORM, SELECT_ACTIVE_LOGIN_FORM } from './types';

// types async
// import { REGISTER_USER_ASYNC } from './types'

const initialState = {
    activeForm: 'loginForm',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ACTIVE_REGISTER_FORM:
            return {
                ...state,
                activeForm: 'registerForm'
            }

        case SELECT_ACTIVE_LOGIN_FORM:
            return {
                ...state,
                activeForm: 'loginForm'
            }

        default:
            return state;
    }
}
