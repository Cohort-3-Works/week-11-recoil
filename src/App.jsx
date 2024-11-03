import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  );
}

export default App;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count is : {count}</h1>
      <br />
      <Increase setCount={setCount}></Increase>
      <Decrease setCount={setCount}></Decrease>
    </>
  );
}

function Increase({ setCount }) {
  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
    </>
  );
}
function Decrease({ setCount }) {
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
