import { FormEventHandler, useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef<null | HTMLInputElement>(null);
  const ageRef = useRef<null | HTMLInputElement>(null);

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (!nameRef.current || !ageRef.current) return;
    console.log(nameRef.current?.value, ageRef.current?.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" placeholder="Name" ref={nameRef} />
      <input type="number" name="age" placeholder="Age" ref={ageRef} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UncontrolledForm;
