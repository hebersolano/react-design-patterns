import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import AppProvider from "./context";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function AppPageCtx({ children }: { children: ReactNode | ReactNode[] }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log("count:", count);

  return (
    <AppProvider>
      <Container>{children}</Container>;
    </AppProvider>
  );
}

export default AppPageCtx;
