import { Counter } from "./components/Counter";
import { Counter2 } from "./components/BadCodeRecoil";
import "./App.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      {/* <Counter></Counter> */}
      <br />
      <RecoilRoot>
        <Counter2></Counter2>
      </RecoilRoot>
    </>
  );
}

export default App;
