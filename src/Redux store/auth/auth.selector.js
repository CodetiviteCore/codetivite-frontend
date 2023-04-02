import { createSelector } from "reselect"

const selectAuthReducer = (state) => state.auth

export const selectUser = createSelector(
    [selectAuthReducer],
    (authSlice)=>authSlice.currentUser
)

export const selectCarrer = createSelector(
    [selectAuthReducer],
    (authSlice)=>authSlice.isCareerPathSelected
)