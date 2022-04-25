import styled from "styled-components";
import { Nav as ReactstrapNav, NavItem as ReactstrapNavItem} from "reactstrap";

export const LogoContainer = styled.div`
  max-width: 180px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Nav = styled(ReactstrapNav)`
  margin: 0 10px 0 0;
`;

export const NavItem = styled(ReactstrapNavItem)`
  margin: 0 5px 0 0;
`;
