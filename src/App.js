import React from "react";

import "./components/form.css";

import Form from "./components/form";
import Header from "./components/header";
import History from "./components/history";
import Results from "./components/results";

function App() {
  let [resultsData, setRestultsData] = useState("");
  let localData = JSON.parse(localStorage.getItem("History"));
  let [renderedData, setRenderedData] = useState(localData);

  const getFormDataHandler = (data) => {
    localData ? (localData = localData) : (localData = []);
    localStorage.setItem("History", JSON.stringify([...localData, data]));
    setRestultsData(data);
    setRenderedData(JSON.parse(localStorage.getItem("History")));
  };
  return (
    <>
      <Header></Header>
      <Form getFormData={getFormDataHandler}></Form>
      <div style={{ display: "flex" }}>
        <History
          getHistoryData={renderedData == null ? [] : renderedData}
        ></History>
        <Results getResultsData={resultsData}></Results>
      </div>
    </>
  );
}

export default App;
