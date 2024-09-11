import "./App.css";
import List from "./components/lists/List";
import { Author, Book } from "./components/lists/data/types";
import { authors } from "./components/lists/data/authors";
import SmallList from "./components/lists/SmallAuthorList";
import LargeList from "./components/lists/LargeAuthorList";
import { books } from "./components/lists/data/books";
import SmallBookList from "./components/lists/SmallBookList";
import LargeBookList from "./components/lists/LargeBookList";

function App() {
  return (
    <>
      <List<Author> items={authors} sourceName="author" Component={SmallList} />
      <List<Author> items={authors} sourceName="author" Component={LargeList} />
      <List<Book> items={books} sourceName="book" Component={SmallBookList} />
      <List<Book> items={books} sourceName="book" Component={LargeBookList} />
    </>
  );
}

export default App;
