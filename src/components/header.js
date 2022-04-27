import React from "react";

function Header() {
  return (
    <>
      <Header className="App-header">
        <H1>RESTy</H1>
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
