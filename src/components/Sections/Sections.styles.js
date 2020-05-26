import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const CenteredPaper = styled(Paper)`
  padding: 20px;
  width: 80%;
  height: 50%;
  min-height: 200px;
`;

export const CustomList = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CustomListItem = styled(ListItem)`
  height: 100%;
  cursor: pointer;
  padding: 0;
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  color: black;
  width: 100%;
  height: 100%;
`;

export const CustomListItemText = styled(ListItemText)`
  & span {
    font-size: 2rem;
  }
`;
