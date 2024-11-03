import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";

export function Counter2() {
  return (
    <>
      <Counting></Counting>
      <br />
      <Increase></Increase>
      <Decrease></Decrease>
    </>
  );
}

function Counting() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <h1>count is : {count}</h1>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
    </>
  );
}
function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

Increase.propTypes = {
  setCount: PropTypes.func.isRequired,
};
Decrease.propTypes = {
  setCount: PropTypes.func.isRequired,
};
