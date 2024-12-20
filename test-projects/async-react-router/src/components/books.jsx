import { useLoaderData } from "react-router";
import delay from "../util/delay";
import { MainHeading } from "./styled-elements";
import { defer, Await, useAsyncValue } from "react-router";
import { Suspense } from "react";

const Books = () => {
  const { bookCountPromise, authorsPromise } = useLoaderData();

  return (
    <div>
      <MainHeading>Books</MainHeading>
      <p>
        <strong>Available Books: </strong>
        <Suspense fallback="loading...">
          <Await resolve={bookCountPromise}>
            <Author />
          </Await>
        </Suspense>
      </p>
      <p>
        <strong>Authors:</strong>
        <Suspense fallback="loading...">
          <Await resolve={authorsPromise}>{(authors) => authors}</Await>
        </Suspense>
      </p>
    </div>
  );
};

function Author() {
  const author = useAsyncValue();
  return <div>{author}</div>;
}

function loader() {
  const bookCountPromise = delay(10, 1000);
  const authorsPromise = delay("Codelicks", 2000);

  return defer({
    bookCountPromise,
    authorsPromise,
  });
}

export const booksRoute = { element: <Books />, loader };
