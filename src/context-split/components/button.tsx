import styled from "styled-components";
import { useAppActions, useAppState } from "../hooks/use-context";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const Button = () => {
  const { toggle } = useAppActions();

  return <ToggleButton onClick={toggle}>⮜</ToggleButton>;
};

export const ButtonClose = () => {
  const { close } = useAppActions();

  return <ToggleButton onClick={close}>Close</ToggleButton>;
};
