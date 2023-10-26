import { configureStore } from "@reduxjs/toolkit";

// import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/authSlice";

import { productsApi } from "../features/productsAPI";

const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

export default store;
