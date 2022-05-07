import React from "react";
import "./form.scss";

function Form(props) {
  const Formhandler = (e) => {
    e.preventDefault();
    const data = {
      method: "Get",
      url: "",
    };
    props.getFormHandler(getFormData);
  };

  return (
    <Form className="form" onSubmit={submitHandler}>
      <input
        type="url"
        id="link"
        name="link"
        placeholder="http://api.url.here"
      ></input>
      <Button type="submit">Go</Button>

      <br></br>
      <label className="methods">
        <span id="get">GET</span>
        <span id="post">POST</span>
        <span id="put">PUT</span>
        <span id="delete">DELETE</span>
      </label>
    </Form>
  );
}

export default Form;
