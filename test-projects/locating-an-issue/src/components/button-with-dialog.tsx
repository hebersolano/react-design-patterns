import { useState } from "react";
import { Button } from "./button";
import { ModalDialog } from "./modal-dialog";
import { useToggleDialog } from "../hooks/use-dialog";

function ButtonWithDialog() {
  const { isVisible, show, hide } = useToggleDialog();

  return (
    <div>
      {/* add the button */}
      <Button onClick={show}>Open</Button>
      {/* add the dialog itself */}
      {isVisible && <ModalDialog onClose={hide} />}
    </div>
  );
}

export default ButtonWithDialog;
