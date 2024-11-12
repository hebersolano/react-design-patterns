import axios from "axios";
import { useEffect, useState } from "react";

function useResource<T>(srcUrl: string) {
  const [src, setSrc] = useState<T | null>(null);

  useEffect(
    function () {
      function getData() {
        axios
          .get<T>(srcUrl)
          .then((res) => setSrc(res.data))
          .catch((err) => console.error("error fetching on" + srcUrl, err));
      }
      getData();
    },
    [srcUrl],
  );

  return src;
}

export default useResource;
