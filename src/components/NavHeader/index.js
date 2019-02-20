import React, { Component } from "react";
import { Nav } from "react-bootstrap";

const NavHeader = props => {
  return (
    <div>
      <Nav>
        <Nav.Item>API Auth Demo</Nav.Item>
        <Nav.Item
          onChange={props.handleAuthentication}
          value={props.authenticated}
        />
      </Nav>
    </div>
  );
};

export default NavHeader;
