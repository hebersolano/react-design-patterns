import { Button, ButtonProps } from "./composition";
import { partialComponent } from "./partial-component";

export const PurpleButton = partialComponent<ButtonProps>(Button, {
  color: "purple",
});

export const BigPurpleButton = partialComponent<ButtonProps>(PurpleButton, {
  size: "big",
});
