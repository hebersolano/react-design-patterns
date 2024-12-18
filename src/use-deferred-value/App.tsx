import { useDeferredValue, useState } from "react";
import HeavyComponent from "./components/heavy-component";

function AppDeferred() {
  const [keyword, setKeyword] = useState("");
  const deferredValue = useDeferredValue(keyword);

  return (
    <section>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <HeavyComponent keyword={deferredValue} />
    </section>
  );
}

export default AppDeferred;
