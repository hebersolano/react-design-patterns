import { FC } from "react";

interface ListProps<T> {
  items: T[];
  sourceName: string;
  Component: FC<{ [key: string]: T } & JSX.Element["props"]>;
}

function List<T>({ items, sourceName, Component }: ListProps<T>) {
  return (
    <>
      {items.map((item, i) => (
        <Component key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
}

export default List;
