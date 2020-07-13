import React from "react";

/*
Presentational component 이다
주로 UI를 선언하는 것에 집중하고, 
필요한 값이나 함수는 props로 받아와서 사용한다.
*/

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  //props를 통해서 상태와 함수들을 가져온다.
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10));
    //기본적으로 input의 value는 문자열이기 때문에 parsrInt 해준다.
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
