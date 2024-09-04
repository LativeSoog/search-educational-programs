import { createSlice } from "@reduxjs/toolkit";
import programsData from "../assets/data/programs.json";

const treeSlice = createSlice({
  name: "tree",
  initialState: {
    listPrograms: programsData.faculties,
    filteredListPrograms: false,
  },
  reducers: {
    changeFilters(state, action) {
      state.filteredListPrograms = action.payload;
    },
  },
});

export const { changeFilters } = treeSlice.actions;
export default treeSlice.reducer;
