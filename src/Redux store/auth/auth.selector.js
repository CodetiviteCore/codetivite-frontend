import { createSelector } from "reselect"

const selectAuthReducer = (state) => state.auth

export const selectUser = createSelector(
    [selectAuthReducer],
    (authSlice)=>authSlice.currentUser
)

export const selectCareerState = createSelector(
    [selectAuthReducer],
    (authSlice)=>authSlice.isCareerPathSelected
)

export const selectCareer = createSelector(
    [selectAuthReducer],
    (authSlice)=>authSlice.careerPath
)

export const selectVisitedRoutes = createSelector(
    [selectAuthReducer],
    (authSlice)=>authSlice.visitedRoutes
)