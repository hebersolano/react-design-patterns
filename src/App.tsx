import "./App.css";
import SplitScreen from "./components/SplitScreen";

function LeftComponent() {
  return <h2>I am Left</h2>;
}
function RightComponent() {
  return <h2>I am Right</h2>;
}

function App() {
  return (
    <SplitScreen
      Left={LeftComponent}
      leftTw="basis-1/3"
      Right={RightComponent}
      rightTw="basis-2/3"
    />
  );
}

export default App;
