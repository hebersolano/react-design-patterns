function ControlledModal({
  display,
  onClose,
  children,
}: {
  display: boolean;
  onClose: () => void;
  children: JSX.Element;
}) {
  return (
    <>
      {display && (
        <div
          onClick={onClose}
          className="fixed inset-x-0 inset-y-0 overflow-auto bg-black/30"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="m-6 w-1/2 bg-white p-12"
          >
            <button onClick={onClose}>x</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ControlledModal;
