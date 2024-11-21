import emitter from "./emitter";

function Buttons() {
  function onIncrementCounter() {
    emitter.emit("inc", { info: "+" });
  }
  function onDecrementCounter() {
    emitter.emit("dec", { info: "-" });
  }

  return (
    <div>
      <button onClick={onDecrementCounter} className="px-2 py-1">
        -
      </button>
      <button onClick={onIncrementCounter} className="px-2 py-1">
        +
      </button>
    </div>
  );
}

export default Buttons;
