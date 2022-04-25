import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "",
      url: "",
    };
  }

  setMethod = (e) => this.setState({ methodPlaceholder: e.target.value });
  setUrl = (e) => this.setState({ urlPlaceholder: e.target.value });

  showUrlAndMethod = (e) => {
    e.preventDefault();
    this.setState({ url: this.state.urlPlaceholder });
    this.setState({ method: this.state.methodPlaceholder });
  };

  render() {
    return (
      <div>
        <div class="p-4">
          <form data-form>
            <div class="input-group mb-4">
              <select class="form-select flex-grow-0 w-auto" data-method>
                <option value="GET" selected>
                  GET
                </option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
              <input
                data-url
                required
                class="form-control"
                type="url"
                placeholder="https://example.com"
              />
              <button type="submit" class="btn btn-primary">
                Send
              </button>
            </div>
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="query-params-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#query-params"
                  type="button"
                  role="tab"
                  aria-controls="query-params"
                  aria-selected="true"
                >
                  Query Params
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="request-headers-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#request-headers"
                  type="button"
                  role="tab"
                  aria-controls="request-headers"
                  aria-selected="false"
                >
                  Headers
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="json-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#json"
                  type="button"
                  role="tab"
                  aria-controls="json"
                  aria-selected="false"
                >
                  JSON
                </button>
              </li>
            </ul>

            <div class="tab-content p-3 border-top-0 border">
              <div
                class="tab-pane fade show active"
                id="query-params"
                role="tabpanel"
                aria-labelledby="query-params-tab"
              >
                <div data-query-params></div>
                <button
                  data-add-query-param-btn
                  class="mt-2 btn btn-outline-success"
                  type="button"
                >
                  Add
                </button>
              </div>
              <div
                class="tab-pane fade"
                id="request-headers"
                role="tabpanel"
                aria-labelledby="request-headers-tab"
              >
                <div data-request-headers></div>
                <button
                  data-add-request-header-btn
                  class="mt-2 btn btn-outline-success"
                  type="button"
                >
                  Add
                </button>
              </div>
              <div
                class="tab-pane fade"
                id="json"
                role="tabpanel"
                aria-labelledby="json-tab"
              >
                <div
                  data-json-request-body
                  class="overflow-auto"
                  style="max-height: 200px;"
                ></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
