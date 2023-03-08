
import { AUTH_ACTION_TYPES } from './auth.type';
export const AUTH_INITIAL_STATE = {
    currentUser: null,
}

export const authReducer = (state = AUTH_INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case AUTH_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:payload
            }
        case AUTH_ACTION_TYPES.REMOVE_CURRENT_USER:
            return {
                ...state,
                currentUser:payload
            }
        default:
            return state
    }
}