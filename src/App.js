import React from "react";

import "./components/form.css";

import Form from "./components/form";
import Header from "./components/header";
import History from "./components/history";
import Results from "./components/results";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
      </main>
      <History />
      <Results />
    </div>
  );
}

export default App;
