import { createSlice } from "@reduxjs/toolkit";

const campSlice = createSlice({
  name: "cart",
  initialState: {
    campList: [],
    campInfo: {},
    isFetching: false,
    error: false
  },
  reducers: {
    getAllCampStart: state => {
      state.isFetching = true;
    },
    getAllCampSuccess: (state, action) => {
      state.isFetching = false;
      state.campList = action.payload;
    },
    getAllCampFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    getCampStart: state => {
      state.isFetching = true;
    },
    getCampSuccess: (state, action) => {
      state.isFetching = false;
      state.campInfo = action.payload;
    },
    getCampFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    updateCampStart: state => {
      state.isFetching = true;
    },
    updateCampSuccess: (state, action) => {
      state.isFetching = false;
      state.campInfo = action.payload;
    },
    updateCampFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    createCampStart: state => {
      state.isFetching = true;
    },
    createCampSuccess: (state, action) => {
      state.isFetching = false;
      state.campList.push(action.payload);
    },
    createCampFailure: state => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {
  getAllCampStart,
  getAllCampSuccess,
  getAllCampFailure,
  getCampStart,
  getCampSuccess,
  getCampFailure,
  updateCampStart,
  updateCampSuccess,
  updateCampFailure,
  createCampStart,
  createCampSuccess,
  createCampFailure
} = campSlice.actions;
export default campSlice.reducer;
