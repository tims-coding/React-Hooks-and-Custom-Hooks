import "./App.css";
import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseCustom from "./components/UseCustom";
import UseCustom2 from "./components/UseCustom2";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseCustom />
      <UseCustom2 />
    </div>
  );
}

export default App;
