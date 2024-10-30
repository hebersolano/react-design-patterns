import { FormEventHandler, useState } from "react";

function UncontrolledForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(name, age);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UncontrolledForm;
