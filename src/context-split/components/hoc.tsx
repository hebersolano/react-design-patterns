import { FC } from "react";

export function WitnNavClose(Component: FC) {
  return function (props: object) {
    return <Component {...props} />;
  };
}
