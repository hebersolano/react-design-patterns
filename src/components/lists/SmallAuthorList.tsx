import { authorT } from "./data/types";

function SmallList({ author }: { [key: string]: authorT }) {
  const { name, age } = author;

  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}

export default SmallList;
