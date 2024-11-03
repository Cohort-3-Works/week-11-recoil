import { Counter } from "./components/Counter";
import { Counter2 } from "./components/BadCodeRecoil";
import "./App.css";
import { RecoilRoot } from "recoil";
import { Counter3 } from "./components/Memo";

function App() {
  return (
    <>
      {/* <Counter></Counter> */}
      <br />
      <RecoilRoot>
        <Counter2></Counter2>
      </RecoilRoot>
      <Counter3></Counter3>
    </>
  );
}

export default App;
