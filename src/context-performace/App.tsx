import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default function AppContext() {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
}
