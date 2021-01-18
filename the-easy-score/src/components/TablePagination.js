import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import usePagination from "../hooks/usePagination";

const TablePagination = ({
  count,
  page,
  rowsPerPage,
  rowsPerPageOptions,
  paginate,
}) => {
  const pagination = usePagination({
    count,
    page,
    rowsPerPage,
    rowsPerPageOptions,
  });

  const handlePaginateFirst = () => {
    paginate(parseInt(1));
  };

  const handlePaginatePrevious = () => {
    paginate(parseInt(page - 1));
  };

  const handlePaginate = (e) => {
    paginate(parseInt(e.target.getAttribute("id")));
  };

  const handlePaginateNext = () => {
    paginate(parseInt(page + 1));
  };

  const handlePaginateLast = () => {
    paginate(parseInt(pagination.pageCount));
  };

  return (
    <div>
      <Pagination>
        {pagination.showFirst === true ? (
          <Pagination.First
            id={"firstpagination"}
            onClick={handlePaginateFirst}
          />
        ) : null}
        {pagination.showPrevious === true ? (
          <Pagination.Prev
            id={"prevpagination"}
            onClick={handlePaginatePrevious}
          />
        ) : null}
        {pagination.pages.map((pageLink) => {
          return (
            <Pagination.Item
              key={pageLink}
              id={pageLink}
              onClick={handlePaginate}
            >
              {pageLink}
            </Pagination.Item>
          );
        })}
        {pagination.showNext === true && (
          <Pagination.Next onClick={handlePaginateNext} />
        )}
        {pagination.showLast === true && (
          <Pagination.Last onClick={handlePaginateLast} />
        )}
      </Pagination>
    </div>
  );
};

export default TablePagination;
