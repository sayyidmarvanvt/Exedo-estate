import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// Reusable action handlers
const startLoading = (state) => {
  state.loading = true;
};

const handleSuccess = (state, action) => {
  state.currentUser = action.payload || null;
  state.loading = false;
  state.error = null;
};

const handleFailure = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Authentication actions
    signInStart: startLoading,
    signInSuccess: handleSuccess,
    signInFailure: handleFailure,
    signUpStart: startLoading,
    signUpSuccess: handleSuccess,
    signUpFailure: handleFailure,
    signOutUserStart: startLoading,
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: handleFailure,

    // User management actions
    updateUserStart: startLoading,
    updateUserSuccess: handleSuccess,
    updateUserFailure: handleFailure,
    deleteUserStart: startLoading,
    deleteUserSuccess: handleSuccess,
    deleteUserFailure: handleFailure,

    // Clear error
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  clearError,
} = userSlice.actions;

export default userSlice.reducer;
