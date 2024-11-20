import emitter from "./emitter";

function Buttons() {
  function onIncrementCounter() {
    emitter.emit("inc");
  }
  function onDecrementCounter() {
    emitter.emit("dec");
  }

  return (
    <div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
}

export default Buttons;
