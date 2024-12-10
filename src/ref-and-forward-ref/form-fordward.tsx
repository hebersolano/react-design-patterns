import { ChangeEvent, useRef, useState } from "react";
import Input from "./input";

const FormForward = () => {
  // const [value, setValue] = useState("");
  const ref = useRef(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(ref.current);
  };

  const submit = () => {
    //send some data to backend server
    console.log(ref.current);
  };
  return (
    <>
      <Input ref={ref} onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    </>
  );
};
export default FormForward;
