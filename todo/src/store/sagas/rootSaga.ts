import {all} from "redux-saga/effects";
import { watchTodosLoad } from "./todos";
//import { watchStatsRequest } from "./imageStatsSaga";

function* rootSaga() {
  yield all([watchTodosLoad()/*, watchStatsRequest()*/]);
}

export default rootSaga;