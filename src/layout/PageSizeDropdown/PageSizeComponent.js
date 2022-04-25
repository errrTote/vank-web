import React from "react";

import { PageSizeContainer, Input } from "./styles";

export const PageSizeComponent = ({ pageSize, handlePageSize }) => {
  const options = [10, 20, 50, 100];

  return (
    <PageSizeContainer>
      <p>Mostrar</p>

      <Input
        type="select"
        name="sizePage"
        placeholder={pageSize}
        onChange={handlePageSize}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Input>

      <p>registros</p>
    </PageSizeContainer>
  );
};
