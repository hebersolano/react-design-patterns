import { FC } from "react";

function logProps<T extends object>(Component: FC<T>) {
  return (props: T) => {
    console.log(props);
    return <Component {...props} />;
  };
}

export default logProps;
