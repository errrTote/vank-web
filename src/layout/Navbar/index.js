import React, { useContext } from "react";

import { Navbar, NavLink } from "reactstrap";

import { Link } from "styles/theme";
import logo from "assets/logo.png";
import { LogoContainer, Logo, Nav, NavItem } from "./styles";
import { Context } from "context/Context";
import { InformationModal } from "../InformationModal";

export const NavbarComponent = () => {
  const { setModal } = useContext(Context);
  return (
    <div>
      <InformationModal />
      <Navbar color="light" expand="md" light>
        <LogoContainer>
          <Logo src={logo} alt="vank" />
        </LogoContainer>
        <Nav navbar>
          <NavItem onClick={() => setModal(true)}>
            <NavLink href="#">
              Información
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/logout/">
              Salir
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
