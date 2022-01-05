import React, { useState } from 'react';
import { DisplayPagination } from '.';
const Pagination = ({ type, meta }) => {
  const [currentPage] = useState(meta.page);
  const [postPerPage] = useState(meta.pageSize);
  return (
    <DisplayPagination
      postPerPage={postPerPage}
      totalPosts={meta.total}
      currentPage={currentPage}
      type={type} />
  );
};

export default Pagination;