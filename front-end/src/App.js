import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const router = useRoutes(
    routes.map((route) => ({
      ...route,
      element: React.cloneElement(route.element, { search }),
    }))
  );

  return (
    <>
      <Sidebar />
      <div className="main">
        <Header search={search} setSearch={setSearch} />
        {router}
      </div>
    </>
  );
}

export default App;
