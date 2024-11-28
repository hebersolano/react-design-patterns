import Main from "./components/main";
import AppPageCtx from "./components/page";
import Sidebar from "./components/sidebar";

// const Container = styled.div`
//   display: flex;
//   height: 100vh;
// `;

export default function AppContextSplit() {
  return (
    <AppPageCtx>
      <Sidebar />
      <Main />
    </AppPageCtx>
  );
}
