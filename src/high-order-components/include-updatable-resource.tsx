import axios from "axios";
import { FC, useEffect, useState } from "react";

const toCapital = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function includeUpdatableResource<T, U>(
  Component: FC<T>,
  srcUrl: string,
  srcName: string,
) {
  return (props: T) => {
    const [initSrc, setInitSrc] = useState<U | null>(null);
    const [resource, setResource] = useState<U | null>(null);

    useEffect(() => {
      function getSrc() {
        axios
          .get(srcUrl)
          .then((res) => {
            console.log(res);
            setInitSrc(res.data);
            setResource(res.data);
          })
          .catch((err) => console.error(err));
      }
      getSrc();
    }, []);

    const onChange = (data: U) => {
      setResource((currSrc) => ({ ...currSrc, ...data }));
    };

    const onReset = () => setResource(initSrc);

    const onPost = () => {
      axios
        .post("http://localhost:9090/users/" + srcName, { [srcName]: resource })
        .then((res) => {
          setInitSrc(res.data);
          setResource(res.data);
        })
        .catch((err) => console.error("error axios", err));
    };

    const srcProps = {
      [srcName]: resource,
      ["onChange" + toCapital(srcName)]: onChange,
      ["onPost" + toCapital(srcName)]: onPost,
      ["onReset" + toCapital(srcName)]: onReset,
    };

    return <Component {...props} {...srcProps} />;
  };
}

export default includeUpdatableResource;
