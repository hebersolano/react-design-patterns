import { useEffect, useState } from "react";
import emitter from "./emitter";
import { Handler } from "mitt";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    const onIncrement: Handler<{ info: string }> = (e) => {
      console.log(e);
      setCount((count) => count + 1);
    };

    const onDecrement: Handler = (e) => {
      console.log(e);
      setCount((count) => count - 1);
    };

    emitter.on("inc", onIncrement);
    emitter.on("dec", onDecrement);

    return () => {
      emitter.off("inc", onIncrement);
      emitter.off("dec", onDecrement);
    };
  }, []);
  return <div>#: {count}</div>;
}

export default Counter;
