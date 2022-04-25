import styled from "styled-components";
import { Table as ReactstrapTable } from "reactstrap";
import { FaRegTimesCircle } from "react-icons/fa";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 80vh;
  margin: 1em;
  padding: 1em;
  overflow: scroll;
`;

export const Table = styled(ReactstrapTable)`
  max-width: 1024px;
`;

export const EmptyContainer = styled.div`
  align-self: center;
  margin: 5em 0 0 0;
  font-size: 3em;
`;

export const EmptyIcon = styled(FaRegTimesCircle)``;

export const EmptyText = styled.span``;
