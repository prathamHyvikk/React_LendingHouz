import { combineReducers, configureStore } from "@reduxjs/toolkit";
import personRole from "../features/personRole";
import authenticate from "../features/authenticate";
import cart from "../features/cart";


import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  person: personRole,
  auth: authenticate,
  cart: cart
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "person", "cart"],
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
