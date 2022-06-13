import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { serverApi } from "./api";
import { reducer } from "./reducer";

const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: persistReducer(
      {
        key: "apiState",
        storage
      },
      serverApi.reducer
    ),
    users: persistReducer(
      {
        key: "localState",
        storage
      },
      reducer
    )
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
    serverApi.middleware
  ]
});

const persistor = persistStore(store);

export { store, persistor };
