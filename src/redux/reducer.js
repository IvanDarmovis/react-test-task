import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: {},
  photos: [],
  users: [],
  posts: [],
  isLoggedIn: false,
  isFetching: false
};

const getUsers = createAsyncThunk("users/getUsers", async (id) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (data) return data;
    throw new Error("Немає користувача з таким ID");
  } catch (error) {
    alert(error);
  }
});

const getUserById = createAsyncThunk("users/getUserById", async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (data) return data;
    throw new Error("Немає користувача з таким ID");
  } catch (error) {
    alert(error);
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

const getPosts = createAsyncThunk("user/getPosts", async (number) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?\_start=${number}&\_limit=10` // eslint-disable-line no-useless-escape
    );
    if (!data.length) throw new Error("Більше нема!");
    return data;
  } catch (error) {
    alert(error);
  }
});

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = {};
      state.users = [];
      state.photos = [];
      state.posts = [];
      state.isLoggedIn = false;
      state.isFetching = false;
    }
  },
  extraReducers: {
    [getUserById.pending](state) {
      state.isFetching = true;
    },
    [getUserById.fulfilled](state, action) {
      state.isFetching = false;
      if (!action.payload) return;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    [getUsers.pending](state) {
      state.isFetching = true;
    },
    [getUsers.fulfilled](state, action) {
      const id = state.currentUser.id;
      state.isFetching = false;
      if (!action.payload) return;
      state.users = action.payload.filter((el) => el.id !== id);
      state.isLoggedIn = true;
    },
    [getPhotos.fulfilled](state, action) {
      state.photos = action.payload;
    },
    [getPosts.pending](state) {
      state.isFetching = true;
    },
    [getPosts.fulfilled](state, action) {
      state.isFetching = false;
      if (!action.payload) return;
      state.posts = [...state.posts, ...action.payload];
    }
  }
});

const { reducer } = slice;
const { logoutUser } = slice.actions;

export { reducer, getUsers, logoutUser, getPhotos, getPosts, getUserById };
