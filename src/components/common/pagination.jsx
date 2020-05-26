import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import _ from 'lodash';

import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const params = useParams();
  const location = useLocation();
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <CustomNav>
      <CustomList>
        {pages.map((page) => (
          <CustomListItem page={page} currentpage={currentPage} key={page}>
            <CustomLink
              to={`/sections/${params.sectionId}/${page}${location.search}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </CustomLink>
          </CustomListItem>
        ))}
      </CustomList>
    </CustomNav>
  );
};

const CustomListItem = styled(ListItem)`
  border-radius: 50%;
  background-color: ${(props) =>
    +props.page === +props.currentpage ? '#3f51b5' : 'transparent'};
  margin: 10px;
  & a {
    color: ${(props) =>
      +props.page === +props.currentpage ? 'white' : 'black'};
  }
  && {
    padding: 0;
  }
`;

const CustomNav = styled(`nav`)`
  display: flex;
  justify-content: center;
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 8px 16px 8px 16px;
`;

const CustomList = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default Pagination;
