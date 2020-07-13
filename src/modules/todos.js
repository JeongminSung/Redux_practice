//액션 타입 생성
//1. 할 일 항목을 추가하는 액션
const ADD_TODO = "todos/ADD_TOTO ";
//2. 할 일 항목 체크하는 액션
const TOGGLE_TODO = "todos/TOGGLE_TODO";

//액션 생성함수
let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  //새로운 todo를 만들어준다
  todo: {
    id: nextId++, //새롭게 생성되면 1씩 등가
    text,
  },
});
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

/*
초기 상태 선언
리듀서의 초기 상태는 꼭 객체타입일 필요 없다. 배열,원시타입(숫자, 문자열, 불리언)이어도 상관 없다
*/
const initialState = [
  /*
   {
     id:1,
     text: "예시",
     done: false
   }
   */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      //기존의 todo 배열에 concat해서 새로운 todo를 담아 보내준다.
      return state.concat(action.todo);
    case TOGGLE_TODO:
      //todo에 있는 모든 배열을 돌아야하기 때문에 map으로 접근하기
      return state.map(
        //만약 todo의 기존 아이디가 action으로 받아온 id와 같다면
        (todo) =>
          todo.id === action.id
            ? //기존의 todo 배열을 복사하고, 거기서 done파라미터를 반대(boolaen타입)로 바꿔라
              { ...todo, done: !todo.done }
            : // 아니라면 todo를 그냥 보존
              todo
      );
    default:
      return state;
  }
}
