import { combineReducers, configureStore } from "@reduxjs/toolkit";
import personRole from "../features/personRole";
import authenticate from "../features/authenticate";


import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  person: personRole,
  auth: authenticate,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "person"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({

      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
