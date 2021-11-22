import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billAmount: null,
  tipPercent: 15,
  dividedBy: 1,
  tip: 0,
  tipPerPerson: 0,
  totalWithTip: 0,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setBillData: (state, action) => {
      state.billAmount = action.payload;
    },
    setTipData: (state, action) => {
      state.tipPercent = action.payload;
    },
    setDividedByData: (state, action) => {
      state.dividedBy = action.payload;
    },
    calculateBill: (state, action) => {
      state.tip = +state.billAmount * (+state.tipPercent / 100);
      state.tipPerPerson = +state.tip / +state.dividedBy;
      state.totalWithTip = +state.tip + +state.billAmount;
    },
    clearInputs: (state, action) => {
      state.billAmount = 0;
      state.tipPercent = 0;
      state.dividedBy = 1;
      state.tip = 0;
      state.tipPerPerson = 0;
      state.totalWithTip = 0;
    },
    increaseValue: (state, action) => {
      if (action.payload === "tip") {
        state.tipPercent++;
      } else if (action.payload === "people") {
        state.dividedBy++;
      }
    },
    decreaseValue: (state, action) => {
      if (action.payload === "tip") {
        state.tipPercent--;
      } else if (action.payload === "people") {
        state.dividedBy--;
      }
    },
  },
});

export const {
  setBillData,
  setTipData,
  setDividedByData,
  calculateBill,
  clearInputs,
  increaseValue,
  decreaseValue,
} = mainSlice.actions;

export default mainSlice.reducer;
