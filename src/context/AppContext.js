import { createContext, useContext, useState } from "react";
import { tracker } from "../components/_shared_/bootstrap";

const AppContext = createContext({
  tracker: () => {},
  setCurrentProgress: () => {},
  currentProgress: 0,
  setProgressVisible: () => {},
  progressVisible: false,
  progressLimit: 0,
});

export const AppProvider = (props) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);
  const progressLimit = 9;

  return (
    <AppContext.Provider value={{ tracker, currentProgress, setCurrentProgress, progressVisible, setProgressVisible, progressLimit }}>
      {props.children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const app = useContext(AppContext);
  if (!app) throw new Error("it must be used within a Provider");
  return app;
}

export default AppContext;
