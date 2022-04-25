import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

export const PaginatorComponent = ({
  pages,
  prevPage,
  current,
  nextPage,
  lastPage,
  handlePagination,
}) => {
  return (
    <Pagination>
      <PaginationItem disabled={!prevPage}>
        <PaginationLink
          onClick={() => handlePagination(1)}
          className="paginationLink"
          children={<FaAngleDoubleLeft />}
        />
      </PaginationItem>

      <PaginationItem disabled={!prevPage}>
        <PaginationLink
          onClick={() => handlePagination(current - 1)}
          className="paginationLink"
          children={<FaAngleLeft />}
        />
      </PaginationItem>

      {pages.map((page) => (
        <PaginationItem key={page.number} active={page.number === current}>
          <PaginationLink
            onClick={() => handlePagination(page.number)}
            className="paginationLink"
          >
            {page.number}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={!nextPage}>
        <PaginationLink
          onClick={() => handlePagination(current + 1)}
          className="paginationLink"
          children={<FaAngleRight />}
        />
      </PaginationItem>

      <PaginationItem disabled={!nextPage}>
        <PaginationLink
          onClick={() => handlePagination(lastPage)}
          className="paginationLink"
          children={<FaAngleDoubleRight />}
        />
      </PaginationItem>
    </Pagination>
  );
};
