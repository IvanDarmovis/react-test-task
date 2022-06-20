import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (data) return data;
    throw new Error("Дані відсутні");
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
    alert("Немає користувача з таким ID");
  }
});

const getPostsByUserId = createAsyncThunk(
  "users/getPostsByUserId",
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      return data;
    } catch (error) {
      alert(error);
    }
  }
);

const getPostById = createAsyncThunk("users/getPostById", async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (data) return data;
    throw new Error("Немає такої статті");
  } catch (error) {
    alert(error);
  }
});

const getPostComments = createAsyncThunk(
  "users/getPostComments",
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      return data;
    } catch (error) {
      alert(error);
    }
  }
);

const getPhotos = createAsyncThunk("user/getPhotos", async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
    if (data) return data;
    throw new Error("Немає фото");
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

const postPublishing = createAsyncThunk(
  "users/postPublishing",
  async (formData, { getState }) => {
    try {
      const userId = getState().currentUser.id;
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { ...formData, userId }
      );
      if (data) return data;
      throw new Error("Не запостилось");
    } catch (error) {
      alert(error);
    }
  }
);

const postCorrection = createAsyncThunk(
  "users/postCorrection",
  async (formData, { getState }) => {
    try {
      const userId = getState().currentUser.id;
      const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${formData.id}`,
        { ...formData, userId }
      );
      if (data) return data;
      throw new Error("Не запостилось");
    } catch (error) {
      alert(error);
    }
  }
);

const deletePost = createAsyncThunk("users/deletePost", async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
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
