import styled from "styled-components";
import { Input as ReactstrapInput } from "reactstrap";

export const PageSizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
`;

export const Input = styled(ReactstrapInput)`
  min-width: 6em;
  margin: 0 5px 0 5px;
`;
