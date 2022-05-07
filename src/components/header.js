import React from "react";
import { link } from "react-dom";
import "./header.scss";
function Header() {
  return (
    <>
      <Header className="header">
        <H1>RESTy App</H1>
      </Header>
      <NavBar className="nav-bar">
        <NavItem>
          <link to="/">Home</link>
        </NavItem>
        <NavItem>
          <link to="/History">History</link>
        </NavItem>
        <NavItem>
          <link to="/Help">Help</link>
        </NavItem>
      </NavBar>
    </>
  );
}

export default Header;
