import React, { Children, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Author } from "../components/lists/data/types";

function UserLouder({
  userId,
  children,
}: {
  userId: string;
  children: ReactNode | ReactNode[];
}) {
  const [data, setData] = useState(null);

  useEffect(
    function () {
      (async () => {
        axios
          .get("http://localhost:9090/users/" + userId)
          .then((res) => {
            console.log(res);
            setData(res.data);
          })
          .catch((err) => console.error(err));
      })();
    },
    [userId],
  );

  if (!data) return;
  console.log(data);

  return (
    <div>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{ author: Author }>,
            {
              author: data,
            },
          );
        }
        return children;
      })}
    </div>
  );
}

export default UserLouder;
