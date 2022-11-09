import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import todosReducer from "./reducers/todos";
import shoppingListReducer from "./reducers/shoppingList";
import rootSaga from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer: { todos: todosReducer, shoppingList: shoppingListReducer },
  middleware: middleware,
  devTools: true
});

sagaMiddleware.run(rootSaga);

export default store;