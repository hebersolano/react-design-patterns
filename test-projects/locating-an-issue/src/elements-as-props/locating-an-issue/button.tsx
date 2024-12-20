import { ReactElement } from "react";
import { Loading } from "./icons";

const Button = ({
  isLoading,
  icon,
}: {
  isLoading: boolean;
  icon: ReactElement;
}) => {
  return <button className="button">Submit {icon}</button>;
};

export default Button;
