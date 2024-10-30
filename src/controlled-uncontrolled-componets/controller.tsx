import { useState } from "react";
import ControlledModal from "./controlled-modal";

function Controller() {
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  return (
    <div>
      <ControlledModal display={show} onClose={onClose}>
        <p>Hello world</p>
      </ControlledModal>
      <button onClick={() => setShow(true)}>show modal</button>
    </div>
  );
}

export default Controller;
