import { useEffect, useState } from "react";

function DataSourceRender<T>({
  getData,
  render,
}: {
  getData: () => Promise<T>;
  render: (src: T) => JSX.Element;
}) {
  const [src, setSrc] = useState<T | null>(null);

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

  return render(src);
}

export default DataSourceRender;
