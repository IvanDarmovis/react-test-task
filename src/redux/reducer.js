import { createSlice } from "@reduxjs/toolkit";
import {
  getUsers,
  getUserById,
  getPostsByUserId,
  getPostById,
  getPostComments,
  getPosts,
  getPhotos,
  postPublishing,
  postCorrection,
  deletePost
} from "./apiActions";

const initialState = {
  currentUser: {},
  photos: [],
  userPosts: [],
  users: [],
  posts: [],
  newPost: {},
  post: {},
  user: {},
  postComments: [],
  isLoggedIn: false,
  isFetching: false,
  lang: ""
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = {};
      state.photos = [];
      state.userPosts = [];
      state.users = [];
      state.posts = [];
      state.newPost = {};
      state.post = {};
      state.user = {};
      state.postComments = [];
      state.isLoggedIn = false;
      state.isFetching = false;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    }
  },
  extraReducers: {
    [getUserById.pending](state) {
      state.isFetching = true;
    },
    [getUserById.fulfilled](state, action) {
      state.isFetching = false;
      if (!action.payload) return;
      if (!state.isLoggedIn) {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
      }
      state.user = action.payload;
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
      state.posts = [...state.posts, ...action.payload];
      state.isFetching = false;
    },
    [getPostsByUserId.fulfilled](state, action) {
      if (!action.payload) return;
      state.userPosts = action.payload;
    },
    [getPostById.pending](state) {
      state.isFetching = true;
    },
    [getPostById.fulfilled](state, action) {
      state.isFetching = false;
      if (!action.payload) return;
      state.post = action.payload;
    },
    [getPostComments.fulfilled](state, action) {
      state.isFetching = false;
      if (!action.payload) return;
      state.postComments = action.payload;
    },
    [postPublishing.fulfilled](state, action) {
      if (!action.payload) return;
      state.newPost = action.payload;
    },
    [postCorrection.fulfilled](state, action) {
      if (!action.payload) return;
      state.newPost = action.payload;
    }
  }
});

const { reducer } = slice;
const { logoutUser, setLang } = slice.actions;

export {
  reducer,
  getUsers,
  logoutUser,
  setLang,
  getPhotos,
  getPosts,
  getUserById,
  getPostsByUserId,
  postPublishing,
  getPostById,
  getPostComments,
  postCorrection,
  deletePost
};
