import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoInterface from "../../interface/todos";

const initialState: {todoList: any[], status: {loading: boolean, error: boolean, ended: boolean}} = {
  todoList: [],
  status: {
    loading: false,
    error: false,
    ended: false
  }
};

export const todos = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    loadingTodo: (state:any=initialState) => {
        state.status = {
            loading: true,
            error: false,
            ended: false
          }
    },
    getTodoList: (state: any=initialState, action: {payload: PayloadAction<TodoInterface>}) => {
      debugger;
      state.status = {
        loading: false,
        error: false,
        ended: true
      }
      state.todoList = action.payload;
    },
    fetchFailure: (state: any=initialState, action: PayloadAction<any>) => {
      state.status = {
        loading: false,
        error: true,
        ended: false
      }      
    },
    addTodo: (state: any=initialState, action: PayloadAction<any>) => {
      state.status = {
        loading: false,
        error: false,
        ended: true
      }
      state.todoList.push(...action.payload);
    },
    deleteTodo: (state: any=initialState, action: PayloadAction<any>) => {
        state.status = {
            loading: false,
            error: false,
            ended: true
          }
          state.todoList.filter((el:any) => el.id !== action.payload);
    },
    updateTodo: (state: any=initialState, action: PayloadAction<any>) => {
      state.status = {
          loading: false,
          error: false,
          ended: true
        }
        // TODO
  },
  },
});

export const { loadingTodo, fetchFailure, getTodoList, addTodo, deleteTodo, updateTodo } =
  todos.actions;

export default todos.reducer;