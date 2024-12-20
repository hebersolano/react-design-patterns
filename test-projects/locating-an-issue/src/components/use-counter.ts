import { useEffect, useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCounter((prev) => prev + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
