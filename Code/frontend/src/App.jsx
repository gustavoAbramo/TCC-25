import React, { useState } from "react";
import AppRoutes from "./appRoutes";

function App() {
  const [userName, setUserName] = useState("bruno");
  return (
    <>
      <AppRoutes />
      
    </>
  );
}

export default App;
