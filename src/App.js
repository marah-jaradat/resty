import React from "react";

import "./App.css";
import "./components/form.css";

import Form from "./components/form";
import Header from "./components/header";
import Footer from "./components/footer";
import History from "./components/history";
import Results from "./components/results";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="History" element={<History />} />
        <Route path="Help" element={<Help />} />
      </Routes>
      {/* <div>Request Method: {this.state.requestParams.method}</div>
      <div>URL : {this.state.requestParams.url}</div>
      <Form getFormHandler={this.getFormData} />
      <div style={{ display: "flex" }}></div>
      <Results data={this.state.data} /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
