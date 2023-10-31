import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tech-marketplace-9c7e.onrender.com",
    // baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "item/get-items",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
