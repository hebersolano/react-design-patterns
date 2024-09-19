import React, { Children, ReactNode, useEffect, useState } from "react";
import axios from "axios";

function CurrentUserLouder({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [data, setData] = useState(null);

  useEffect(function () {
    (async () => {
      axios
        .get("http://localhost:9090/current-user")
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    })();
  }, []);

  if (!data) return;

  return (
    <div>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { author: data });
        }
        return children;
      })}
    </div>
  );
}

export default CurrentUserLouder;
