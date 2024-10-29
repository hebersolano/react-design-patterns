import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

function DataSource({
  getData,
  srcName,
  children,
}: {
  getData: () => Promise<Record<string, any>>;
  srcName: string;
  children: ReactNode | ReactNode[];
}) {
  const [src, setSrc] = useState(null);

  useEffect(
    function () {
      (() => {
        getData()
          .then((data) => {
            setSrc(data);
          })
          .catch((err) => console.error(err));
      })();
    },
    [getData],
  );

  if (!src) return;
  console.log(src);

  return (
    <div>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<Record<string, string>>, {
            [srcName]: src,
          });
        }
        return children;
      })}
    </div>
  );
}

export default DataSource;
