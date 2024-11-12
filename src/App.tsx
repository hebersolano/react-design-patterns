import "./App.css";
import UserInfo from "./custom-hooks/user-info";

function App() {
  return (
    <div className="space-y-4 divide-y divide-solid divide-black">
      <UserInfo userId="2" />
      <UserInfo userId="1" />
      <UserInfo userId="3" />
    </div>
  );
}

export default App;
