
import { AUTH_ACTION_TYPES } from './auth.type';
export const signUpWithGoogle = (user) => {
    return {
        type: AUTH_ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    }
}
export const logoutUser = () => {
    return {
        type: AUTH_ACTION_TYPES.REMOVE_CURRENT_USER,
        payload:null
    }
}
export const careerPathSelectState = (state) => {
    return {
        type: AUTH_ACTION_TYPES.SET_CAREERPATH_SELECTED,
        payload:state
    }
}
export const setCareerPath = (state) => {
    return {
        type: AUTH_ACTION_TYPES.SET_CAREERPATH,
        payload:state
    }
}

export const addToVisitedRoutes = (route) => {
    return {
        type: AUTH_ACTION_TYPES.ADD_VISITED_ROUTES,
        payload:route
    }
}