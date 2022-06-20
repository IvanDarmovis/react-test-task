import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export {
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
};
