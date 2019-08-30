import { takeEvery, put, call } from "redux-saga/effects";
import { setImages } from "../AC";
import messages from "../constants";

const getData = (id: string) => {
  console.log(`id is ${id}`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        "https://avatars.mds.yandex.net/get-pdb/199965/039b8780-f31c-4a58-a1fb-1b514612d988/s1200",
        "https://avatars.mds.yandex.net/get-pdb/224463/468ff8a9-cac9-41c1-9876-c54d4f21d3a6/s1200"
      ]);
    }, 5000);
  });
};

function* LoaderSaga() {
  yield console.log("New!");
  const data = yield call(getData, "123");
  yield put(setImages(data));
}

function* rootSaga() {
  yield takeEvery(messages.LOAD, LoaderSaga);
}

export default rootSaga;
