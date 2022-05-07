import React from "react";
import "./header.scss";
function Header() {
  return (
    <>
      <Header className="header">
        <H1>RESTy App</H1>
      </Header>
      <NavBar>
        <NavItem>Home</NavItem>
        <NavItem>History</NavItem>
        <NavItem>Help</NavItem>
      </NavBar>
    </>
  );
}

export default Header;
