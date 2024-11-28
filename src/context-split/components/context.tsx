import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

type CtxApp = {
  isCollapsed: boolean;
};

type CtxActions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const AppContext = createContext<CtxApp | null>(null);
export const AppCtxActions = createContext<CtxActions | null>(null);

function AppProvider({ children }: { children: ReactNode | ReactNode[] }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = useCallback(function toggleCollapsed() {
    setIsCollapsed((prev) => !prev);
  }, []);

  const open = useCallback(function toggleCollapsed() {
    setIsCollapsed(false);
  }, []);

  const close = useCallback(function toggleCollapsed() {
    setIsCollapsed(true);
  }, []);

  const appState = useMemo(() => ({ isCollapsed }), [isCollapsed]);
  const appActions = useMemo(
    () => ({ open, close, toggle }),
    [open, close, toggle],
  );

  return (
    <AppContext.Provider value={appState}>
      <AppCtxActions.Provider value={appActions}>
        {children}
      </AppCtxActions.Provider>
    </AppContext.Provider>
  );
}

export default AppProvider;
