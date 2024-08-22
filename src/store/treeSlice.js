import { createSlice } from "@reduxjs/toolkit";
import programsData from "../assets/data/programs.json";

const treeSlice = createSlice({
  name: "tree",
  initialState: {
    listPrograms: programsData.faculties,
  },
  reducers: {},
});

export const {} = treeSlice.actions;
export default treeSlice.reducer;
