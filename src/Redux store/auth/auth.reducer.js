
import { AUTH_ACTION_TYPES } from './auth.type';
export const AUTH_INITIAL_STATE = {
    currentUser: null,
    // careerPath: null,
    isCareerPathSelected: false,
    visitedRoutes: []
}

export const authReducer = (state = AUTH_INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case AUTH_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: { ...payload }
            }
        case AUTH_ACTION_TYPES.REMOVE_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        case AUTH_ACTION_TYPES.SET_CAREERPATH_SELECTED:
            return {
                ...state,
                isCareerPathSelected: payload
            }
        case AUTH_ACTION_TYPES.SET_CAREERPATH:
            return {
                ...state,
                careerPath: payload
            }
        case AUTH_ACTION_TYPES.ADD_VISITED_ROUTES:
            return {
                ...state,
                visitedRoutes: [payload]
            }
        default:
            return state
    }
}