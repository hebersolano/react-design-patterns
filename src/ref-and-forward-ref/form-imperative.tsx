import { ChangeEvent, useRef, useState } from "react";
import InputImperative, { ImperativeApi } from "./input-imperative";

const FormImperative = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ref = useRef<ImperativeApi>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const submit = () => {
    if (username.length < 1) {
      //focus on the username input
      ref.current?.focus();
      ref.current?.shake();
      console.log(ref.current);
    } else {
      //submit data to server
    }
  };

  return (
    <>
      <InputImperative changeHandler={setUsername} ref={ref} />
      <input type="password" name="password" onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    </>
  );
};
export default FormImperative;
