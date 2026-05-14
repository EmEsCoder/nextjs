"use client";

import { createContext, useState } from "react";

const context = createContext();

export default function FContext({ children}) {
  const [name, setName] = useState(null);
  function settingName(name) {
    setName(name);
  }
  function deleteName(name) {
    setName(null);
  }


  return (
    <context.Provider value={{ name, settingName,deleteName }}>
      {children}
    </context.Provider>
  );
}



export { context };
