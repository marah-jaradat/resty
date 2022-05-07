import React from "react";
import Form from "./form";
import Results from "./results";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);
  const [request, setRequest] = useState({});
  const [header, setHeader] = useState({});
  const [isloading, setLoad] = useState(false);
  function simulateNetworkLoading() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  const handelApi = async (request) => {
    setLoad(true);
    setRequest(request);
    let chosenMethod = request.method.toLowerCase();
    const response = await axios[chosenMethod](
      request.url,
      request.body ? request.body : null
    );
    let result = { Results: response.data };
    setData(result);
    let header = { Header: response.headers };
    setHeader(header);
  };
  const handleClick = () => setLoad(true);
  useEffect(() => {
    if (isloading) {
      simulateNetworkLoading().then(() => {
        setLoad(false);
      });
    }
  }, [isloading]);
  return (
    <div className="home">
      <Form handelApi={handelApi} handleClick={handleClick} />
      <Results
        data={data}
        method={request.method}
        url={request.url}
        header={header}
        loading={isloading}
      />
    </div>
  );
}
export default Home;
