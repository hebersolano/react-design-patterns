import { useState } from "react";
import Button from "./locating-an-issue/button";
import { Loading, Warning } from "./locating-an-issue/icons";

export default function AppElementsAsProps() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Button isLoading={isLoading} icon={<Loading size="25px" />} />
      <Button isLoading={isLoading} icon={<Warning />} />
    </>
  );
}
