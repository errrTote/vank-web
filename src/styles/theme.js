import styled from "styled-components";
import {
  Button as ReactstrapButton
} from "reactstrap";
import { Link as RRDLink } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
`;

export const Button = styled(ReactstrapButton)`
  border-radius: 0px;
  width: 120px;
`;

export const Link = styled(RRDLink)`
  text-decoration: none;
`;

