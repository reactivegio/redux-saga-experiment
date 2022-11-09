import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {shoppingList: any[], status: {loading: boolean, error: boolean, ended: boolean}} = {
  shoppingList: [],
  status: {
    loading: false,
    error: false,
    ended: false
  }
};

export const shoppingList = createSlice({
  name: "shoppingList",
  initialState: initialState,
  reducers: {
    loadingShoppingList: (state:any=initialState) => {
        state.status={
            loading: true,
            error: false,
            ended: false
          }
    },
    addShoppingList: (state: any=initialState, action: PayloadAction<any>) => {
      state.status={
        loading: false,
        error: false,
        ended: true
      }
      state.shoppingList.push(...action.payload);
    },
    deleteShoppingList: (state: any=initialState, action: PayloadAction<any>) => {
        state.status={
            loading: false,
            error: false,
            ended: false
          }
    },
  },
});

export const { loadingShoppingList, addShoppingList, deleteShoppingList } =
shoppingList.actions;

export default shoppingList.reducer;