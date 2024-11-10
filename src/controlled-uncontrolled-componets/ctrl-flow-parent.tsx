import { useState } from "react";
import UnctrlFlow from "./unctrl-flow";

type Data = Record<string, string>;
export type GoNext = (data: Data) => void;
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

const LastStep = ({ data }: { data: Data }) => {
  console.log("last step:", data);

  return (
    <div>
      <h1>Finall Step</h1>
    </div>
  );
};

function CtrlFlowParent() {
  const [data, setData] = useState<Data>({});
  const [currStepIdx, setCurrStepIdx] = useState(0);
  // const childrenLength = useRef<number>();

  const goNext: GoNext = (dataStep = {}) => {
    setData((currData) => {
      const newData = { ...currData, ...dataStep };
      console.log("newData", currStepIdx, newData);
      return newData;
    });
    setCurrStepIdx((idx) => idx + 1);
  };

  return (
    <>
      <UnctrlFlow
        currIdx={currStepIdx}
        onNext={goNext}
        finalStep={<LastStep data={data} />}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnctrlFlow>
    </>
  );
}

export default CtrlFlowParent;
