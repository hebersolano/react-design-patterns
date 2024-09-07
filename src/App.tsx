import "./App.css";
import List from "./components/lists/List";
import { authorT } from "./components/lists/data/types";
import { authors } from "./components/lists/data/authors";
import SmallList from "./components/lists/SmallAuthorList";
import LargeList from "./components/lists/LargeAuthorList";

function App() {
  return (
    <>
      <List<authorT>
        items={authors}
        sourceName="author"
        Component={SmallList}
      />
      <List<authorT>
        items={authors}
        sourceName="author"
        Component={LargeList}
      />
    </>
  );
}

export default App;
