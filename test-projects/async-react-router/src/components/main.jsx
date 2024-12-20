import { useLoaderData, Await } from "react-router";
import delay from "../util/delay";
import { MainContainer, MainHeading } from "./styled-elements";
import { defer } from "react-router";
import { Suspense } from "react";

const Main = () => {
  const { promise } = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>
        Main -{" "}
        <Suspense fallback="Loading...">
          <Await resolve={promise}>{(data) => <strong>{data}</strong>}</Await>
        </Suspense>
      </MainHeading>
    </MainContainer>
  );
};

async function loader() {
  return defer({ promise: delay("Fetched Data", 1000) });
}

export const mainRoute = { element: <Main />, loader };
