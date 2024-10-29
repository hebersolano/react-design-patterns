import axios from "axios";
import "./App.css";
import LargeAuthorItem from "./components/lists/LargeAuthorItem";
import LargeBookList from "./components/lists/LargeBookList";
import DataSource from "./louder-component/DataSource";
import ResourceLouder from "./louder-component/ResourceLoader";
import DataSourceRender from "./louder-component/DataSourceRender";
import { Author } from "./components/lists/data/types";
// import CurrentUserLouder from "./louder-component/CurrentUserLouder";
// import UserLouder from "./louder-component/userLoader";

async function getUserData(id: string) {
  return axios.get("http://localhost:9090/users/" + id).then((res) => res.data);
}

function App() {
  return (
    <>
      {/* <ResourceLouder srcUrl="http://localhost:9090/users/3" srcName="author">
        <LargeAuthorItem />
      </ResourceLouder>

      <br />
      <ResourceLouder srcUrl="http://localhost:9090/books/3" srcName="book">
        <LargeBookList />
      </ResourceLouder>

      <br />
      <DataSource getData={getUserData.bind(null, "2")} srcName="author">
        <LargeAuthorItem />
      </DataSource> */}

      <br />
      <DataSourceRender<Author>
        getData={getUserData.bind(null, "1")}
        render={(src) => <LargeAuthorItem author={src} />}
      />
    </>
  );
}

export default App;
