import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";
/**
 * containers 컴포넌트란
 * 리덕스에 있는 상태를 조회하거나, 액션을 dispatch할 수 있는 컴포넌트를 의미한다.
 */

function CounterContainer() {
  //useSelector는 리덕스 스토어의 state를 조회하는 Hook이다
  //store.getState() 에서 반환하는 객체와 동일. 이를 비구조화 할당해서 추출해서 값을 가져온것.
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );
  /**
   * Todo 컴포넌트를 토글 할 때 카운터가 리엔더되는 리소스 낭비를 잡아보자.
   * 기본적으로 useSelector를 이용하여 리덕스 스토어의 상태를 조회할 때는 state가 바뀌지 않으면 리렌더링 하지 않는다.
   * 하지만 이 컨테이너에서는 Hook를 통해 매번 렌더링 될 때 마다 {number, diff}를 만드는 것이기 때문에 상태가 바뀌었는지 바뀌지 않았는지
   * 확인을 할 수 없어서 낭비 렌더링이 이루어지고 있다.
   * 이를 최적하기 위해 두 가지 방법이 있다.
   *
   * 1) useSelector를 여러 번 사용하는 것
   * const number = useSelector(state => state.counter.number);
   * const diff = useSelector(state => state.counter.diff)
   * ==> 이렇게 하면 해당 값 중 하나라도 바뀌었을 때만 컴포넌트가 리랜더링 된다.
   *
   * 2) react-redux의 shallowEqual 함수를 useSelector의 두 번째 인자로 전달해주는 것 (현재 코드에 적용중)
   * ==> useSelector의 두 번째 파라미터(메소드위에 마우스를 올려보자)는 'equalityFn'이다.
   *     equalityFn?: (left: any, right: any) => boolean
   *     이전 값과 다음 값을 비교하여 true가 나오면 리랜더링을 하지 않고, false가 나오면 리랜더링 한다.
   *     shallowEqual은 react-redux의 내장함수로서, 객체 안의 가장 '겉에' 있는 값들을 모두 비교해준다.
   *     말 그대로 가장 '겉에'있는 객체의 값들을 비교해주는 것으로서, 반드시 원본 객체의 불변성을 유지해줘야 변화가 감지된다.
   */

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </div>
  );
}

export default CounterContainer;
