import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from "react";
import type { GoNext } from "./ctrl-flow-parent";

type Data = Record<string, string>;

type Props = {
  currIdx: number;
  onNext: GoNext;
  finalStep: JSX.Element;
  children: JSX.Element[];
};

function UnctrlFlow({ currIdx, onNext, finalStep, children }: Props) {
  const childdrenArr = Children.toArray(children);
  childdrenArr.push(finalStep);
  const currChild = childdrenArr[currIdx];

  function goNext(data: Data) {
    onNext(data);
  }

  if (!isValidElement(currChild)) return currChild;

  return cloneElement(currChild as ReactElement<{ goNext: GoNext }>, {
    goNext,
  });
}

export default UnctrlFlow;
