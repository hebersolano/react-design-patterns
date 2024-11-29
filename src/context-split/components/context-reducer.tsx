import { ReactNode, createContext, useMemo, useReducer } from "react";

type CtxApp = {
  isCollapsed: boolean;
};

type CtxActions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

type State = CtxApp;
const defaultState: State = {
  isCollapsed: true,
};

type Action = {
  type: "open" | "close" | "toggle";
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "open":
      return { ...state, isCollapsed: true };
    case "close":
      return { ...state, isCollapsed: false };
    case "toggle":
      return { ...state, isCollapsed: !state.isCollapsed };
  }
}

export const AppContext = createContext<CtxApp | null>(null);
export const AppCtxActions = createContext<CtxActions | null>(null);

function AppReducerProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const appState = useMemo(
    () => ({ isCollapsed: state.isCollapsed }),
    [state.isCollapsed],
  );
  const appActions = useMemo(
    () => ({
      open: () => dispatch({ type: "open" }),
      close: () => dispatch({ type: "close" }),
      toggle: () => dispatch({ type: "toggle" }),
    }),
    [],
  );

  return (
    <AppContext.Provider value={appState}>
      <AppCtxActions.Provider value={appActions}>
        {children}
      </AppCtxActions.Provider>
    </AppContext.Provider>
  );
}

export default AppReducerProvider;
