import React from "react";
import "./form.scss";
import { useState } from "react";

function Form(props) {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");

  const handelMethod = (e) => {
    let elems = document.querySelectorAll("span");
    elems.forEach((elem) => (elem.style.backgroundColor = "white"));
    document.getElementById(`${e.target.id}`).style.backgroundColor =
      "rgb(170, 175, 179)";
    setMethod(e.target.id);
  };
  const handelUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  };
  const handelBody = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };
  const Formhandler = (e) => {
    e.preventDefault();
    const data = {
      method: method,
      url: url,
      body: null,
    };
    let action = {
      payload: {
        method: data.method,
        url: data.url,
        body: data.body,
      },
    };
    props.addHistory(action);
    if (body) {
      data.body = body;
    }
    m.push({ url: data.url, method: data.method });
    props.renderMethod(m);
    props.handelApi(data);
  };

  return (
    <Form className="form" onSubmit={Formhandler}>
      <div className="api">
        <input
          className="input"
          type="url"
          id="link"
          name="url"
          placeholder="http://api.url.here"
          onChange={handelUrl}
        ></input>
        <Button
          className="btn"
          type="submit"
          onClick={!props.isloading ? props.handleClick : null}
        >
          Go
        </Button>
      </div>

      <br></br>
      <label className="methods">
        <span id="get" onClick={handelMethod}>
          GET
        </span>
        <span id="post" onClick={handelMethod}>
          POST
        </span>
        <span id="put" onClick={handelMethod}>
          PUT
        </span>
        <span id="delete" onClick={handelMethod}>
          DELETE
        </span>
        <textarea
          name="body"
          onChange={handelBody}
          defaultValue="{}"
        ></textarea>
      </label>
    </Form>
  );
}

export default Form;
