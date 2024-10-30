import { useState } from "react";

function UncontrolledModal({ children }: { children: JSX.Element }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show UncontrolledModal</button>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="fixed inset-x-0 inset-y-0 overflow-auto bg-black/30"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="m-6 w-1/2 bg-white p-12"
          >
            <button onClick={() => setShow(false)}>x</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default UncontrolledModal;
