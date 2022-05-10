import React from "react";
import "./history.css";
import { useState } from "react";
import axios from "axios";
import JSONPretty from "react-json-pretty";

function History(props) {
  const [data, setData] = useState(null);
  const [header, setHeader] = useState({});
  return (
    <>
      <h1>History</h1>
    </>
  );
}

export default History;
