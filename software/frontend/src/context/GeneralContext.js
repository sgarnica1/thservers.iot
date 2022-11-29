import { useState, useContext, createContext } from "react";

const GeneralContext = createContext();

function useGeneral() {
  return useContext(GeneralContext);
}

function GeneralProvider({ children }) {
  const [alert, setAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  return (
    <GeneralContext.Provider
      value={{
        alert,
        setAlert,
        alertData,
        setAlertData,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export { useGeneral, GeneralProvider };
