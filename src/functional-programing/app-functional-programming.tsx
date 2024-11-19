import { Button } from "./composition";
import { BigPurpleButton, PurpleButton } from "./partial-example";
import { Recursive } from "./recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function AppFunctionalProgramming() {
  return (
    <>
      <Recursive data={myNestedObject} />
      <Button size="big" color="#4C66E4" text="Click me!" />
      <PurpleButton text="hey" />
      <BigPurpleButton text="hey big purple" />
    </>
  );
}

export default AppFunctionalProgramming;
