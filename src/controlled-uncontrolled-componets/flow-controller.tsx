import UnctrlFlow from "./unctrl-flow";

type StepProps = { goNext?: (data: Record<string, string>) => void };

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

function FlowController() {
  return (
    <>
      <UnctrlFlow onDone={() => {}}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnctrlFlow>
    </>
  );
}

export default FlowController;
