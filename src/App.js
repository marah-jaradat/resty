import React from "react";

import "./App.css";
import "./components/form.css";

import Form from "./components/form";
import Header from "./components/header";
import Footer from "./components/footer";
import History from "./components/history";
import Results from "./components/results";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequest] = useState({});
  const handleApiCall = async (requestParams) => {
    setRequest(requestParams);
    let methodCall = requestParams.method.toLowerCase();
    const response = await axios[methodCall](
      requestParams.url,
      requestParams.body ? requestParams.body : null
    );
    const result = {
      headers: {
        headers: response.headers,
        results: response.data,
      },
    };

    setData(result);
  };
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
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
