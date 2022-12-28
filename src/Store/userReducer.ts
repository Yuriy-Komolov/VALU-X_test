import { createSlice } from "@reduxjs/toolkit";

import { User } from "../types/User";
import data from '../initData.json'

const initialState: User[] = data;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;