import * as React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider, InputGroup
} from "@blueprintjs/core";

const NavBar = props => (
  <Navbar className={Classes.DARK}>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>Thruster Request Studio</NavbarHeading>
      <NavbarDivider/>
      <InputGroup large={true} leftIcon="application" defaultValue="localhost:8000/api"/>
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <AnchorButton
        href="http://blueprintjs.com/docs/v2/"
        text="Docs"
        target="_blank"
        minimal
        rightIcon="share"
      />
      <AnchorButton
        href="http://github.com/palantir/blueprint"
        text="Github"
        target="_blank"
        minimal
        rightIcon="code"
      />
    </NavbarGroup>
  </Navbar>
);

export default NavBar;
