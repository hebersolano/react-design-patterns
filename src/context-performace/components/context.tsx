import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Context = {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
};

export const AppContext = createContext<Context | null>(null);

export function useAppContext() {
  const state = useContext(AppContext);
  if (!state) throw new Error("no context");
  return state;
}

function AppProvider({ children }: { children: ReactNode | ReactNode[] }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = useCallback(function toggleCollapsed() {
    setIsCollapsed((val) => !val);
  }, []);

  const state = useMemo(
    () => ({ isCollapsed, toggleCollapsed }),
    [isCollapsed, toggleCollapsed],
  );

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export default AppProvider;
