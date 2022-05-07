import React from "react";
import "./results.scss";

function Results(props) {
  return (
    <section>
      <div className="box">
        <pre>{props.data ? JSON.stringify(props.data, undefined) : null}</pre>
      </div>
    </section>
  );
}

export default Results;
