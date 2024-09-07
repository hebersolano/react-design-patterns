import type { ReactNode } from "react";

type Props = {
  children: ReactNode[];
  leftTw?: string;
  rightTw?: string;
};

function SplitScreen({ children, leftTw = "", rightTw = "" }: Props) {
  const [left, right] = children;

  return (
    <div className="flex">
      <div className={"flex-1 bg-blue-500 " + leftTw}>{left}</div>

      <div className={"flex-1 bg-red-500 " + rightTw}>{right}</div>
    </div>
  );
}

export default SplitScreen;
