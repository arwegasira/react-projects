import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'
import axios from 'axios'
import { openModal } from '../Modal/modal'
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
  isError: false,
  errorMessage: '',
}
export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (url, thunkAPI) => {
    try {
      const { data } = await axios.get(url)
      // const state = thunkAPI.getState()
      // thunkAPI.dispatch(openModal())
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const id = action.payload
      const newCart = state.cartItems.filter((item) => item.id !== id)
      state.cartItems = newCart
    },
    adjustItemQty: (state, action) => {
      const { id, context } = action.payload
      if (context === 'increase') {
        const cartItem = state.cartItems.find((item) => item.id === id)
        cartItem.amount += 1
      }
      if (context === 'decrease') {
        const cartItem = state.cartItems.find((item) => item.id === id)
        if (cartItem.amount == 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id)
        } else {
          cartItem.amount -= 1
        }
      }
    },
    calculateTotal: (state) => {
      let total = 0
      let amount = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.errorMessage = action.payload
      })
  },
})

export const { clearCart, removeItem, adjustItemQty, calculateTotal } =
  cartSlice.actions
export default cartSlice.reducer
