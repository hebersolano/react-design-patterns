import "./App.css";
import LargeAuthorItem from "./components/lists/LargeAuthorItem";
import CurrentUserLouder from "./louder-component/CurrentUserLouder";

function App() {
  return (
    <>
      <CurrentUserLouder>
        <LargeAuthorItem />
      </CurrentUserLouder>
    </>
  );
}

export default App;
