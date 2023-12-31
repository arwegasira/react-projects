import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const modal = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
    },
    closeModal: (state, action) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer
