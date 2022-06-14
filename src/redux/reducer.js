import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: {},
  photos: [],
  users: [],
  isLoggedIn: false,
  isFetching: false
};

const getUsers = createAsyncThunk("users/getUsers", async (id) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (data.find((el) => el.id === id)) return { data, id };
    return alert("Немає користувача з таким ID");
  } catch (error) {
    alert("Повторіть спробу");
    throw new Error();
  }
});

const getPhotos = createAsyncThunk("user/getPhotos", async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
    return data;
  } catch (error) {}
});

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = {};
      state.users = [];
      state.isLoggedIn = false;
      state.isFetching = false;
    }
  },
  extraReducers: {
    [getUsers.pending](state) {
      state.isFetching = true;
    },
    [getUsers.fulfilled](state, action) {
      const { data, id } = action.payload;
      if (!data) {
        state.isFetching = false;
        return;
      }
      state.users = data;
      state.currentUser = data.find((el) => el.id === id);
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [getPhotos.fulfilled](state, action) {
      state.photos = action.payload;
    }
  }
});

const { reducer } = slice;
const { logoutUser } = slice.actions;

export { reducer, getUsers, logoutUser, getPhotos };
