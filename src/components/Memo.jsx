import { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";

export function Counter3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   // Set interval to increment count every 3000 milliseconds (3 seconds)
  //   const intervalId = setInterval(() => {
  //     setCount((c) => c + 1);
  //   }, 3000);

  //   // Cleanup the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <CurrentCount count={count}></CurrentCount>
      <br />
      <Increase></Increase>
      <Decrease></Decrease>
    </>
  );
}

const CurrentCount = memo(function CurrentCount({ count }) {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
});

const Increase = memo(function Increase() {
  function increase() {}

  return (
    <>
      <button onClick={increase}>Increase</button>
    </>
  );
});

// function Increase() {
//   function increase() {}

//   return (
//     <>
//       <button onClick={increase}>Increase</button>
//     </>
//   );
// }

const Decrease = memo(function Decrease() {
  function decrease() {}

  return (
    <>
      <button onClick={decrease}>Decrease</button>
    </>
  );
});

CurrentCount.propTypes = {
  count: PropTypes.func.isRequired,
};
