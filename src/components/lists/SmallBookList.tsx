import { Book } from "./data/types";

function SmallBookList({ book }: { book: Book }) {
  const { name, price } = book;
  return (
    <h2>
      {name} / {price}
    </h2>
  );
}

export default SmallBookList;
