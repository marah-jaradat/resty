import React from "react";

function Header() {
  return (
    <header className="App-header">
      <h1>RESTy</h1>
      <nav class="navbar navbar-dark bg-dark">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a style="color: black" class="navbar-brand" href="./index.html">
              Home
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a style="color: black" class="nav-link" href="#">
                  History
                </a>
                <a style="color: black" class="nav-link" href="./support">
                  Help
                </a>
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
