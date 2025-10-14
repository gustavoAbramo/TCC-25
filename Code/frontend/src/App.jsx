import React, { useState, useEffect } from "react";
import AppRoutes from "./appRoutes";
import api from "./services/api.service";


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const res = await api.get("/user/me", { withCredentials: true });
      console.log(res.data);
      setUserName(res.data.user.name); // Atualiza com o nome do usuário logado
    }
    fetchUser();
  }, []);

  return (
    <>
      <AppRoutes userName={userName} setUserName={setUserName}/>
      
    </>
  );
}

export default App;
