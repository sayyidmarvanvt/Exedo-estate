import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer,persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root",
  storage: storageSession,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor=persistStore(store)

export const clearPersistedState = () => {
    persistor.purge();
  };