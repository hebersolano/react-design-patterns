import React, { ReactNode } from "react";
import styled from "styled-components";
import { useState } from "react";
import { ScrollableContainer } from "./dummy-components";

const DynamicBlock = styled.div<{ top: number; color: string }>`
  position: ${(props) => (props.top === 113 ? "fixed" : "absolute")};
  top: ${(props) => (props.top === 113 ? "0.2rem" : `${props.top}px`)};
  left: 1rem;
  background: ${(props) => props.color};
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const calcPosition = (scrollValue: number) => 170 - scrollValue / 2;
const calcColor = (position: number) => {
  const normalizePosition = Math.min(Math.max(position, 0), 255);
  return `rgb(${normalizePosition}, ${255 - normalizePosition}, 150)`;
};

function DynamicScroll({
  content,
  children,
}: {
  content?: ReactNode;
  children: ReactNode | ReactNode[];
}) {
  const [position, setPosition] = useState(170);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const newPosition = calcPosition(e.currentTarget.scrollTop);
    setPosition(Math.max(113, newPosition));
  };

  const blockColor = calcColor(position);

  return (
    <ScrollableContainer onScroll={handleScroll}>
      <DynamicBlock top={position === 113 ? 113 : position} color={blockColor}>
        🛒
      </DynamicBlock>
      {content}
      {children}
    </ScrollableContainer>
  );
}

export default DynamicScroll;
