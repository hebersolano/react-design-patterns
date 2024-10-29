import React, { Children, ReactNode, useEffect, useState } from "react";
import axios from "axios";

function ResourceLouder({
  srcUrl,
  srcName,
  children,
}: {
  srcUrl: string;
  srcName: string;
  children: ReactNode | ReactNode[];
}) {
  const [src, setSrc] = useState(null);

  useEffect(
    function () {
      (async () => {
        axios
          .get(srcUrl)
          .then((res) => {
            console.log(res);
            setSrc(res.data);
          })
          .catch((err) => console.error(err));
      })();
    },
    [srcUrl, srcName],
  );

  if (!src) return;
  console.log(src);

  return (
    <div>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<Record<string, string>>,
            {
              [srcName]: src,
            },
          );
        }
        return children;
      })}
    </div>
  );
}

export default ResourceLouder;
