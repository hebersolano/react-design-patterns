import { createContext, useContext } from "react";

const Context = createContext<{ test: string } | null>(null);

const Body = ({
  children,
}: {
  children: JSX.Element | string | JSX.Element[];
}) => {
  return <div style={{ padding: ".5rem" }}>{children}</div>;
};

const Header = ({
  children,
}: {
  children: JSX.Element | string | JSX.Element[];
}) => {
  const ctx = useContext(Context);
  if (!ctx) return null;

  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      {children}
      {ctx.test}
    </div>
  );
};
const Footer = ({
  children,
}: {
  children: JSX.Element | string | JSX.Element[];
}) => {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        padding: ".5rem",
        marginTop: ".5rem",
      }}
    >
      {children}
    </div>
  );
};

const Card = ({
  test,
  children,
}: {
  test: string;
  children: JSX.Element | string | JSX.Element[];
}) => {
  return (
    <Context.Provider value={{ test }}>
      <div style={{ border: "1px solid black" }}>{children}</div>
    </Context.Provider>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
