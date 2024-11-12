import { User } from "../types";
import useResource from "./resource-hook";

function UserInfo({ userId }: { userId: string }) {
  const user = useResource<User>("http://localhost:9090/users/" + userId);
  if (!user) return null;
  const { name, age, country, books } = user;

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h3>Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserInfo;
