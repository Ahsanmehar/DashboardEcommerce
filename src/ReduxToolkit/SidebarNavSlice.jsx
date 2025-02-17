import { createSlice } from "@reduxjs/toolkit";

const SidebarNavSlice = createSlice({
  name: "sidebarnav",
  initialState: false,

  reducers: {
    sidebarclick: (state) => {
      return !state;
    },
  },
});

export const { sidebarclick } = SidebarNavSlice.actions;
export default SidebarNavSlice.reducer;
