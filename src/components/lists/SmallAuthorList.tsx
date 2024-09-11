import { Author } from "./data/types";

function SmallList({ author }: { [key: string]: Author }) {
  const { name, age } = author;

  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}

export default SmallList;
