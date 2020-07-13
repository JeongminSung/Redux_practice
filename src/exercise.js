import { createStore } from "redux"; //Store를 만들어주는 import

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션 타입 정의 (Action)
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//액션 생성 함수 정의 (Action Create)
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  //=> 함수는 카멜케이스로 정의
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

//리듀서(Reducer)
function reducer(state = initialState, action) {
  // state에 기본값 설정하는 이유
  // 리덕스에서 초기상태를 만들 때 초기값을 한 번 호출한다.
  // 만약 기본값이 없어서 undefined가 되면 리듀서에서 막아줘야한다.
  switch (
    action.type //action의 type에 따라서 분류
  ) {
    case INCREASE:
      return {
        //반환
        ...state, //기존의 상태값은 유지하되
        counter: state.counter + 1, //기존 상태의 카운터 값을 읽어서 1을 더함
      };
    case DECREASE:
      return {
        //반환
        ...state, //기존의 상태값은 유지하되
        counter: state.counter - 1, //기존 상태의 카운터 값을 읽어서 1을 더함
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
        //배열의 불변성을 위하여 concat으로 접근해야한다.
      };
    default:
      return state;
  }
}
//스토어(Store)
const store = createStore(reducer);
console.log(store.getState());

//리스너(Listener)
const listener = () => {
  const state = store.getState();
  console.log(state);
};

//구독하기(subscribe)
const unsubscribe = store.subscribe(listener);
//unsubscribe();//구독을 해제하고 싶을 때 호출

//디스패치 (action들을 dispatch)
//액션이 dispatch될 떄마다 콘솔에 현재상태를 출력함
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));

//이 명령어를 정의해주고 console에 store를 적으면 store안의 내용물을 볼 수 있다.
window.store = store;
// window.unsubscribe = unsubscribe;
// unsubscribe();
