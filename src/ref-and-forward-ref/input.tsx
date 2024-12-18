import { ChangeEvent, ForwardedRef, forwardRef } from "react";

type Props = { onChange: (e: ChangeEvent<HTMLInputElement>) => void };

const Input = forwardRef(function (
  { onChange }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return <input ref={ref} type="text" onChange={onChange} />;
});

export default Input;
