import styled from "styled-components";
import { useAppContext } from "./context";

const BottomBlock = styled.div<{ collapsed?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.collapsed ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  gap: 10px;
  margin-top: 20px;
  text-align: center;
`;
const Blocks = () => {
  const { isCollapsed } = useAppContext();

  console.log("blocks render");

  return (
    <>
      <BottomBlock collapsed={isCollapsed}>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </BottomBlock>
    </>
  );
};

export default Blocks;
