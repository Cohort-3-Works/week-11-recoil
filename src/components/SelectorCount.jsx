import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";
import { evenSelector } from "../store/selectors/evenSelector";

export function SelectorCounter() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Buttons></Buttons>
          <Counter></Counter>
          <IsEven></IsEven>
        </RecoilRoot>
      </div>
    </>
  );
}

// Defined the components

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 1);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}
function Counter() {
  const value = useRecoilValue(counterAtom);

  return (
    <>
      <h1>Count is : {value} </h1>
    </>
  );
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <>{even ? "Even" : "Odd"}</>;
}
