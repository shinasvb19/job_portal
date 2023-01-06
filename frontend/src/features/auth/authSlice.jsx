import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { id, accessToken } = action.payload;
      state.id = id;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.id = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.id;
export const selectCurrentToken = (state) => state.auth.token;
