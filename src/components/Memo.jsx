import { useEffect, useState, memo } from "react";

export function Counter3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 300);
  }, []);

  return (
    <>
      <CurrentCount></CurrentCount>
      <br />
      <Increase></Increase>
      <Decrease></Decrease>
    </>
  );
}

const CurrentCount = memo(function CurrentCount() {
  return (
    <div>
      <h1>Hi there</h1>
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
