import { takeEvery, select, call, put } from "redux-saga/effects";
import { getTodos } from "../actions/api";
import {
  addTodo,
    loadingTodo,
    getTodoList,
    fetchFailure  
} from "../reducers/todos";

/** LOAD DATA */
export function* watchTodosLoad() {
  yield takeEvery(loadingTodo.type, handleTodosLoad);
}

function* handleTodosLoad():any {
  const total:number = yield select(getTotal);
  
  console.log(total);
  
  try {
    const todos:any = yield call(getTodos, "pippo");
    yield put(getTodoList( todos ));
  } catch (error: any) {
    yield put(fetchFailure({ errorMessage: error.toString() }));
  }
}

/** ADD DATA */
export function* watchTodosAdd() {
  yield takeEvery(addTodo.type, handleTodosAdd);
}

function* handleTodosAdd(todoAdded: any):any {    
  try {
    // const todos:any = yield call(getTodos, "pippo");
    yield put(addTodo( todoAdded ));
  } catch (error: any) {
    yield put(fetchFailure({ errorMessage: error.toString() }));
  }
}

function getTotal(state: any) {
  
  return state.todos.todoList.length
}
