export const Loading = ({ size }: { size?: string }) => {
  return <span style={{ fontSize: size }}>⏳</span>;
};

export const Warning = () => {
  return <span>⚠️</span>;
};
