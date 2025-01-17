import React, { useCallback, useEffect, useRef, useState } from "react";
import ExpensiveComponent from "./components/expensive-component";

const MemoizedEC = React.memo(ExpensiveComponent);

export default function ClosureApp() {
  const [value, setValue] = useState<string>();

  const ref = useRef<() => void>();

  const clickHandler = useCallback(() => {
    ref.current?.();
  }, []);

  useEffect(() => {
    console.log("use effect");
    ref.current = () => {
      console.log(value);
    };
  });

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MemoizedEC btnLabel="click me!" onClick={clickHandler} />
    </>
  );
}
