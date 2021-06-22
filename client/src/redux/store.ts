import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./authSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware
});

sagaMiddleware.run(saga);

export default store;
