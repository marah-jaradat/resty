import React from "react";

import "./App.css";
import "./components/form.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Header from "./components/header";
import Footer from "./components/footer";
import History from "./components/history";
import Results from "./components/results";

import { useReducer } from "ract";
import historyReducer, { addAction } from "./Reducer.js";

const initialState = {
  history: [],
};

function App() {
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const setHistory = (action) => {
    dispatch(addAction(action));
  };

  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<Home setHistory={setHistory} state={state} />}
        />
        <Route path="History" element={<History />} />
        <Route path="Help" element={<Help />} />
      </Routes>
      <Form handleApiCall={handleApiCall} />
      <Results
        data={data}
        url={requestParams.url}
        method={requestParams.method}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
