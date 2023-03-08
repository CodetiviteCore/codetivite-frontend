import { createSelector } from "reselect"

const selectAuthReducer = (state) => state.auth
export const selectUser = createSelector(
    [selectAuthReducer],
    (authSlice)=>authSlice.auth
)