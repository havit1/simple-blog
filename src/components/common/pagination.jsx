import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const params = useParams();
  const location = useLocation();
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className='pagination'>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <Link
              to={`/sections/${params.sectionId}/${page}${location.search}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
