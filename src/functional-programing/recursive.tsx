const isValidObj = (data: string | object) =>
  typeof data === "object" && data !== null;

export const Recursive = ({ data }: { data: string | object }) => {
  if (!isValidObj(data)) {
    return <li>{data as string}</li>;
  }

  const pairs = Object.entries(data);
  console.log(data);
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
            {key}:
            <ul>
              <Recursive data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
