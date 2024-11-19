import { FunctionComponent } from "react";

export function partialComponent<T>(
  Component: FunctionComponent<Partial<T>>,
  partialProps: Partial<T>,
) {
  return (props: Partial<T>) => <Component {...partialProps} {...props} />;
}
