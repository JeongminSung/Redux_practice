import { combineReducers } from "redux";
//루트 리듀서를 만드는 방법. 리덕스 내장함수 combineReducer을 사용한다..
import counter from "./counter";
import todos from "./todos";

/*이곳은 rootReducer을 만들어주는 공간이다.
counter, todos 두 가지의 리덕스 모듈을 만들었다. 그래서 두 개의 리듀서가 존재한다.
하지만 한 프로젝트의 여러 개의 리듀서가 있을 때는 이를 하나의 리듀서로 합쳐서 사용해야한다.
이를 루트 리듀서라고 부른다.
*/

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
