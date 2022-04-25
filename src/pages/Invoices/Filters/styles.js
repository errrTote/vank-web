import styled from "styled-components";
import { Input as ReactstrapInput, Button as ReactstrapButton } from "reactstrap";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #fff;
  margin: 0 0 1em 0;
  padding: 1em;
`;

export const Input = styled(ReactstrapInput)`
  max-width: 250px;
`;

export const DateRangeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const DateButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const DateRangeButton = styled(ReactstrapButton)`
  border-radius: 0;
  width: 100%;
`;
