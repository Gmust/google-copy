import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersAPI} from "../services/usersAPI";
import loginReducer from "./loginSlice";


const rootReducer = combineReducers({
        [usersAPI.reducerPath]: usersAPI.reducer,
        login: loginReducer,
});


export const setupStore =() =>configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(usersAPI.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

