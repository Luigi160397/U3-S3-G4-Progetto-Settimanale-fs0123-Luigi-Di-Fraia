import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import albumReducer from "../reducers/albumReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  album: albumReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
