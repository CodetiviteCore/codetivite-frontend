
import { AUTH_ACTION_TYPES } from './auth.type';
export const signUpWithGoogle = (user) => {
    return {
        type: AUTH_ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    }
}
export const loggoutUser = () => {
    return {
        type: AUTH_ACTION_TYPES.REMOVE_CURRENT_USER,
        payload:null
    }
}