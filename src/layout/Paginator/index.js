import React, { useState, useEffect } from "react";
import { PaginatorComponent } from "./PaginatorComponent";
import { PaginatorInfoComponent } from "./PaginatorInfoComponent";

export const Paginator = ({ pagination, handlePagination }) => {
  const [pages, setPages] = useState([]);
  const  {
    currentPage = 1,
    total = 1,
    lastPage = 1,
    prevPage = 0,
    nextPage = 1,
    to = 1,
    from = 1
  } = pagination;

  const checkPagination = (page) => {
    if(page !== currentPage) handlePagination(page);
  }

  useEffect(() => {
    const pages = [];
    if (!pagination) return pages;
    for (let index = currentPage > 2 ? currentPage - 2 : 1; index <= lastPage; index++) {
      if (pages.length < 5) {
        pages.push({
          number: index
        })
      }
    }
    setPages(pages);
  }, [currentPage, lastPage, pagination]);

  return (
    <div className="paginatorContainer">
      <PaginatorComponent
        pages={pages}
        lastPage={lastPage}
        prevPage={prevPage}
        nextPage={nextPage}
        current={currentPage}
        handlePagination={checkPagination}
        />
      <PaginatorInfoComponent 
        from={from}
        to={to}
        total={total}
      />
    </div>
  )
}
