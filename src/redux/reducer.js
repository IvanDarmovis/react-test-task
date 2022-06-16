import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

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

const getPosts = createAsyncThunk("user/getPosts", async (number) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?\_start=${number}&\_limit=10`
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
    [getUsers.pending](state) {
      state.isFetching = true;
    },
    [getUsers.fulfilled](state, action) {
      const { data, id } = action.payload;
      state.isFetching = false;
      if (!data) return;
      state.users = data;
      state.currentUser = data.find((el) => el.id === id);
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

export { reducer, getUsers, logoutUser, getPhotos, getPosts };
