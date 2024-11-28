import styled from "styled-components";
import { useAppContext } from "./context";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = () => {
  const { toggleCollapsed } = useAppContext();

  return <ToggleButton onClick={toggleCollapsed}>⮜</ToggleButton>;
};

export default Button;
