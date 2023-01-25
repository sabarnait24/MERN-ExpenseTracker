import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getTransaction: builder.query({
      query: () => "/api/transactions",
      providesTags: ["transactions"],
 
    }),

    addTransaction: builder.mutation({
      query: (data) => ({
        url: "/api/transactions",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["transactions"],
    }),

    deleteTransaction: builder.mutation({
      query: (deleteid) => ({
        url: `/api/transactions/${deleteid["_id"]}`,

        method: "DELETE",
      }),
      invalidatesTags: ["transactions"],
    }),
  }),
});

export default apiSlice;
