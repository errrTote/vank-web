import React from 'react';
import { PageSizeComponent } from "./PageSizeComponent";

export const PageSizeDropdown = ({ pagination, handlePageSize }) => {

  const  {
    pageSize = 10,
  } = pagination;


  const checkPageSize = (page_size) => {
    const value = page_size.target?.value;
    if (value !== pageSize) handlePageSize(value);
  }

  return (
    <PageSizeComponent
      pageSize={pageSize}
      handlePageSize={checkPageSize}
    />
  )
}