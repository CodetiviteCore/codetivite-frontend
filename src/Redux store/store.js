import { applyMiddleware } from "redux"
import { createStore,compose } from "redux"
import logger from "redux-logger"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import localStorage from "redux-persist/es/storage";
import thunk from "redux-thunk"
import { rootReducer } from './root-reducer';




const persistConfig = {
    key: 'root',
    storage: localStorage,
    whitelist: ['auth'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean)

const composeEnhancer = (
    process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)