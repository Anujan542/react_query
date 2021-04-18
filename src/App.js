import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Peoples from "./components/Peoples";
import Planets from "./components/Planets";

const App = () => {
  const [page, setPage] = useState("peoples");

  return (
    <>
      <div className="App">
        <h1>Star Wars</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "peoples" ? <Peoples /> : <Planets />}
        </div>
      </div>
    </>
  );
};

export default App;
