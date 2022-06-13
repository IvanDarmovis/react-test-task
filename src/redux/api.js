import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  reducerPath: "server",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  tagTypes: ["users", "photos", "posts"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"]
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"]
    }),
    getPhotos: builder.query({
      query: () => "/photos",
      providesTags: ["photos"]
    }),
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["posts"]
    })
  })
});

export const {
  useGetUsersQuery,
  useGetPhotosQuery,
  useGetPostsQuery,
  useGetUserByIdQuery
} = serverApi;
