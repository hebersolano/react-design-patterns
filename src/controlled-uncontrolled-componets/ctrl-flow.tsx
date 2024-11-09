import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useState,
} from "react";

type Data = Record<string, string>;

type Props = {
  onDone: (data: Data) => void;
  children: JSX.Element[];
};

function UnctrlFlow({ onDone, children }: Props) {
  const [data, setData] = useState<Data>({});
  const [currStepIdx, setCurrStepIdx] = useState(0);

  const childdrenArr = Children.toArray(children);
  const childrenLenght = childdrenArr.length;
  const currChild = childdrenArr[currStepIdx];

  const goNext = (dataStep: Data) => {
    setData((data) => {
      const newData = { ...data, ...dataStep };
      console.log(newData);
      return newData;
    });

    if (currStepIdx >= childrenLenght) {
      onDone(data);
      return;
    }

    setCurrStepIdx((i) => {
      return i + 1;
    });
  };

  if (!isValidElement(currChild)) return currChild;

  return cloneElement(
    currChild as ReactElement<{ goNext: (dataStep: Data) => void }>,
    {
      goNext,
    },
  );
}

export default UnctrlFlow;
