import { useRef, useState } from "react";
import UnctrlFlow from "./unctrl-flow";

type Data = Record<string, string>;
export type GoNext = (data?: Data) => void;
type StepProps = { goNext?: (data: Data) => void };

const StepOne = ({ goNext }: StepProps) => (
  <div>
    <h1>Step #1: name</h1>
    <button onClick={goNext?.bind(null, { name: "Heber" })}>next</button>
  </div>
);
const StepTwo = ({ goNext }: StepProps) => (
  <div>
    <h1>Step #2: email</h1>
    <button onClick={goNext?.bind(null, { email: "yourmail@mail.com" })}>
      next
    </button>
  </div>
);
const StepThree = ({ goNext }: StepProps) => (
  <div>
    <h1>Step #3: address</h1>
    <button onClick={goNext?.bind(null, { address: "some address" })}>
      next
    </button>
  </div>
);

function CtrlFlowParent() {
  const [data, setData] = useState<Data>({});
  const [currStepIdx, setCurrStepIdx] = useState(0);
  const childrenLength = useRef<number>();

  const goNext: GoNext = (dataStep) => {
    setData((data) => {
      const newData = { ...data, ...dataStep };
      return newData;
    });

    setCurrStepIdx((i) => {
      return i + 1;
    });

    console.log("go next", currStepIdx, childrenLength.current, data);
    if (childrenLength.current && currStepIdx === childrenLength.current - 1) {
      console.log("Final step:", data);
      return;
    }
  };

  return (
    <>
      <UnctrlFlow
        currIdx={currStepIdx}
        childrenLength={childrenLength}
        goNext={goNext}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnctrlFlow>
    </>
  );
}

export default CtrlFlowParent;
