import {
  Children,
  cloneElement,
  isValidElement,
  MutableRefObject,
  useEffect,
  type ReactElement,
} from "react";
import type { GoNext } from "./ctrl-flow-parent";

type Data = Record<string, string>;

type Props = {
  currIdx: number;
  childrenLength: MutableRefObject<number | undefined>;
  goNext: GoNext;
  children: JSX.Element[];
};

function UnctrlFlow({ currIdx, childrenLength, goNext, children }: Props) {
  const childdrenArr = Children.toArray(children);
  const currChild = childdrenArr[currIdx];

  useEffect(() => {
    childrenLength.current = childdrenArr.length;
  }, []);

  if (!isValidElement(currChild)) return currChild;

  return cloneElement(currChild as ReactElement<{ goNext: GoNext }>, {
    goNext,
  });
}

export default UnctrlFlow;
