import { useContext } from "react";
import { AppContext, AppCtxActions } from "../components/context";

export function useAppState() {
  const state = useContext(AppContext);
  if (!state) throw new Error("no context");
  return state;
}

export function useAppActions() {
  const state = useContext(AppCtxActions);
  if (!state) throw new Error("no context");
  return state;
}
