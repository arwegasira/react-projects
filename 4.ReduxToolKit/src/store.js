import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cart'
import modal from './features/Modal/modal'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modal,
  },
})
