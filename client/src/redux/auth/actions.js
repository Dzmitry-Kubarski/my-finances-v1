// types sync
import { SELECT_ACTIVE_REGISTER_FORM, SELECT_ACTIVE_LOGIN_FORM } from './types';

// types async
// import { REGISTER_USER_ASYNC } from './types'

// import { api } from '../../api/api';


export const selectActiveRegisterForm = () => {
    return {
        type: SELECT_ACTIVE_REGISTER_FORM
    }
}

export const selectActiveLoginForm = () => {
    return {
        type: SELECT_ACTIVE_LOGIN_FORM
    }
}

