import { useMemo } from "react";

const usePagination = ({ count, page, rowsPerPage, rowsPerPageOptions }) => {
  const pageCount = useMemo(() => {
    return Math.ceil(count / rowsPerPage);
  }, [count, rowsPerPage]);

  const pages = useMemo(() => {
    const value = Array.from(new Array(pageCount), (_, k) => k + 1);

    if (page < 3) {
      return value.slice(0, 5);
    }

    if (pageCount - page < 3) {
      return value.slice(-5);
    }

    return value.slice(page - 3, page + 2);
  }, [page, pageCount]);

  const showFirst = useMemo(() => {
    return page > 3;
  }, [page]);

  const showNext = useMemo(() => {
    return pageCount - page > 0;
  }, [page, pageCount]);

  const showLast = useMemo(() => {
    return pageCount - page > 2;
  }, [page, pageCount]);

  const showPages = useMemo(() => {
    return pages.length !== 1;
  }, [pages.length]);

  const showPagination = useMemo(() => {
    return count >= Math.min(...rowsPerPageOptions);
  }, [count, rowsPerPageOptions]);

  const showPrevious = useMemo(() => {
    return page > 1;
  }, [page]);

  return {
    pageCount,
    pages,
    showFirst,
    showNext,
    showLast,
    showPages,
    showPagination,
    showPrevious,
  };
};

export default usePagination;
