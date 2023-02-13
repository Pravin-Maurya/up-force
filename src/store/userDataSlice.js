import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    userDetails: "",
    userAddress: "",
  },
};

const userDataSlice = createSlice({
  name: "addData",
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      state.userData.userDetails = { ...action.payload };
    },
    addAddress: (state, action) => {
      state.userData.userAddress = { ...action.payload };
    },
  },
});
export const { addUserDetails, addAddress } = userDataSlice.actions;

const { reducer } = userDataSlice;
export default reducer;
