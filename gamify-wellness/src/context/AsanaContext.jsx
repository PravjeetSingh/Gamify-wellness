import { createContext, useState } from "react";

export const AsanaContext = createContext();

const AsanaProvider = ({ children }) => {
  const [asanas, setAsanas] = useState([]);

  const addAsana = (asana) => setAsanas([...asanas, asana]);

  return (
    <AsanaContext.Provider value={{ asanas, addAsana }}>
      {children}
    </AsanaContext.Provider>
  );
};

export default AsanaProvider;