import type { ComponentType } from "react";
// import "./SplitScreen.css";

type Props = {
  Left: ComponentType;
  Right: ComponentType;
  leftTw?: string;
  rightTw?: string;
};

function SplitScreen({ Left, Right, leftTw = "", rightTw = "" }: Props) {
  return (
    <div className="flex">
      <div className={"flex-1 bg-blue-500 " + leftTw}>
        <Left />
      </div>

      <div className={"flex-1 bg-red-500 " + rightTw}>
        <Right />
      </div>
    </div>
  );
}

export default SplitScreen;
