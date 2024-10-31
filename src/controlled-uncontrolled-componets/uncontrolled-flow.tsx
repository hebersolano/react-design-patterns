import { Children, useState } from "react";

function UncontrolledFlow({
  onDone,
  children,
}: {
  onDone: () => void;
  children: JSX.Element[];
}) {
  const [currStepIndex, setCurrStepIndex] = useState(0);

  const childrenArr = Children.toArray(children);
  const maxIndex = childrenArr.length - 1;
  const currChild = childrenArr[currStepIndex];

  console.log(currStepIndex);

  function nextStep(prev: number) {
    return prev >= maxIndex ? 0 : prev + 1;
  }
  function prevStep(prev: number) {
    return prev <= 0 ? maxIndex : prev - 1;
  }

  console.dir(currChild);

  return (
    <div className="flex gap-2">
      <button
        onClick={setCurrStepIndex.bind(null, prevStep)}
        className="px-2 py-1 hover:bg-slate-200"
      >
        ◄
      </button>
      {currChild}
      <button
        onClick={setCurrStepIndex.bind(null, nextStep)}
        className="px-2 py-1 hover:bg-slate-200"
      >
        ►
      </button>
    </div>
  );
}

export default UncontrolledFlow;
