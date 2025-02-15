import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
  editblog: false,
  editindexblog: null,
  editdatablog: null,
};

const BlogSlice = createSlice({
  name: "blog",
  initialState,

  reducers: {
    addblog: (state, action) => {
      state.blogs.push(action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },

    removeblog: (state, action) => {
      state.blogs = state.blogs.filter((_, index) => index !== action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },

    toggleeditblog: (state, action) => {
      state.editblog = true;
      state.editindexblog = action.payload.index;
      state.editdatablog = state.blogs[action.payload.index] || null;
    },

    updateblog: (state, action) => {
      state.blogs[state.editindexblog] = { ...action.payload };
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
      state.editblog = false;
      state.editindexblog = null;
      state.editdatablog = null;
    },
  },
});

export const { addblog, toggleeditblog, removeblog, updateblog } =
  BlogSlice.actions;
export default BlogSlice.reducer;
