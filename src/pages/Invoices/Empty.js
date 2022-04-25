import React from "react";
import { EmptyContainer, EmptyIcon, EmptyText } from "./styles";
export const Empty = () => {
  return (
    <EmptyContainer>
      <EmptyIcon /> <EmptyText>No hay registros</EmptyText>
    </EmptyContainer>
  );
};
