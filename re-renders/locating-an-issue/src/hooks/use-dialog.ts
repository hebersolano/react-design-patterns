import { useState } from "react";

export function useToggleDialog() {
  const [visible, setVisible] = useState(false);

  return {
    isVisible: visible,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  };
}
