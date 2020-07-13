import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
// import "./exercise";

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/* 리액트 프로젝트에 리덕스를 적용하는 방법:
1. yarn add react-redux 다운로드
- index.js
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
const store = createStore(rootReducer);

  <Provider store={store}>
    <App />
  </Provider>,
  - Provider 로 App을 감싸주고 속성으로 store를 넘겨주자

******* 왜 폴더 안에 index.js를 만들어서 사용할까? *******
index.js는 컴퓨터에서 가장 처음으로 찾는 파일 이름이다.
때문에 폴더에 index.js를 만들고 import시 폴더 경로만 입력하면 자동으로 index.js를 임포트 한다.
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
