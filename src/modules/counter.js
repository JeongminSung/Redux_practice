/**
 * 리덕스 모듈 만들기
 * - 액션 타입 / 액션 생성함수 / 리듀서 => 위 항목들이 모두 들어 있는 자바스크립트 파일을 의미한다.
 * - 액션과 리듀서를 분리하여 다른 디렉토리에 저장하게 할 수 있는데, 이번 시간에는 리듀서와 액션관련 코드들을 하나의 파일에 몰아서 작성하는
 * - Ducks 패턴으로 작성할것
 */

// 액션 타입 지정
// Ducks 패턴으로 액션 타입을 만들 때는 이름 앞에 '접두사/' 를 붙혀준다.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있다.
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액선 생성함수
// 내보내서 사용할 수 있도록 export 해준다.
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 리듀서에서 관리 할 모듈의 초기 상태를 선언하기
const initialState = {
  number: 0,
  diff: 1,
};

//리듀서
//export default 붙여주기
//state의 초기값 initialState로 선언해주기
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        //action에서 변경된 diff값을 받아와서 대체해주기.
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
