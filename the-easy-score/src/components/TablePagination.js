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

  console.log(pagination);

  const handlePaginate = (e) => {
    // console.log(e.target.id);
    const targetId = e.target.getAttribute("id");
    // paginate();
    if (targetId === "firstpagination") {
      paginate(1);
    } else if (targetId === "prevpagination") {
      paginate(page - 1);
    } else if (targetId === "nextpagination") {
      paginate(page + 1);
    } else if (targetId === "lastpagination") {
      paginate(pagination.pageCount);
      console.log("wahooooo!!!");
    } else {
      paginate(targetId);
    }
  };

  return (
    <div>
      <Pagination>
        {pagination.showFirst === true ? (
          <Pagination.First id={"firstpagination"} onClick={handlePaginate} />
        ) : null}
        {pagination.showPrevious === true ? (
          <Pagination.Prev id={"prevpagination"} onClick={handlePaginate} />
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
          <Pagination.Next id={"nextpagination"} onClick={handlePaginate} />
        )}
        {pagination.showLast === true && (
          <Pagination.Last id={"lastpagination"} onClick={handlePaginate} />
        )}
      </Pagination>
    </div>
  );
};

export default TablePagination;
