import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
import { contactsReducer } from "./contactsSlice";
import storage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage,
};

// const rootReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// export const persistor = persistStore(store);
