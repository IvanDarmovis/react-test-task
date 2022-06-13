import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  users: [],
  isLoggedIn: false
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      console.log("state: ", state);
      console.log("action: ", action);
    }
  }
});

export const { actions, reducer } = slice;
