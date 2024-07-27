import React, { ChangeEvent } from 'react';
import { Pagination } from '@/common/components/pagination.component';

function usePagination({
  initialPage = 1,
  items = [],
  itemsPerPage = 10,
  onPageChange = undefined,
  paginateLocally = true,
  totalItems = 0,
}) {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isFirstRender = React.useRef(true);
  
  const currentPageItems = React.useMemo(() => {
    if (paginateLocally) {
      const firstPageIndex = (currentPage - 1) * itemsPerPage;
      const lastPageIndex = firstPageIndex + itemsPerPage;
      return items.slice(firstPageIndex, lastPageIndex);
    } else {
      return items;
    }
  }, [currentPage, items]);

  React.useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  React.useEffect(() => {
    if (onPageChange) {
      if (!isFirstRender.current) onPageChange(currentPage);
      else isFirstRender.current = false;
    }
  }, [currentPage]);

  const handlePagination = (e: ChangeEvent, pageSelected: number): void => {
    setCurrentPage(pageSelected);
  };

  const PaginationComponent = (    
    <div className="pagination-structure">
      <Pagination
        color="primary"
        count={totalPages}
        page={currentPage}
        onChange={handlePagination}
      />
    </div>
  );

  return {
    PaginationComponent,
    currentPage,
    totalPages,
    currentPageItems,
    handlePagination,
  };
}

export default usePagination;
