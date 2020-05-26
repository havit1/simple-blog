import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CustomList = styled(List)`
  && {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    height: 100%;
  }
`;
export const CustomListItem = styled(ListItem)`
  width: 100%;
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: left;
  color: black;
  width: 100%;
  height: 100%;
`;
