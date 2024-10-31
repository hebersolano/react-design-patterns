import { Dispatch, SetStateAction, useState } from "react";
import UncontrolledFlow from "./uncontrolled-flow";

type SetData = Dispatch<SetStateAction<{ index: number; done: boolean }>>;

const StepOne = ({ setData }: { setData: SetData }) => {
  return (
    <div>
      <h1>Step #1: Name</h1>
      <input type="text" className="border pl-2" placeholder="name" />
    </div>
  );
};
const StepTwo = () => <h1>Step #2</h1>;
const StepThree = () => <h1>Step #3</h1>;

const initData = { index: 0, done: false };

function FlowController() {
  const [data, setData] = useState(initData);

  return (
    <>
      <UncontrolledFlow onDone={() => ""}>
        <StepOne setData={setData} />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default FlowController;
