import { createContext, useContext } from "react";
import { tracker } from "../components/_shared_/bootstrap";

const AppContext = createContext({ tracker: () => {} });

export function useApp() {
  const app = useContext(AppContext);
  if (!app) throw new Error("it must be used within a Provider");
  return app;
}

export const AppProvider = (props) => {
  return <AppContext.Provider value={{ tracker: tracker }}>{props.children}</AppContext.Provider>;
};

export default AppContext;
