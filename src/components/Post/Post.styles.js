import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';
import { Wrapper } from '../../styles/common';

export const PostWrapper = styled(Wrapper)`
  margin-top: 30px;
  height: unset;
`;

export const CustomPaper = styled(Paper)`
  width: 70%;
  height: 80%;
  min-height: 200px;
  padding: 20px;
`;

export const CustomTypographyBigTitle = styled(Typography)`
  && {
    text-align: center;
    font-size: 3rem;
    border-bottom: 1px solid black;
  }
`;

export const CustomTypogtaphyMediumText = styled(Typography)`
  && {
    margin-top: 20px;
    text-align: left;
    font-size: 1.5rem;
  }
`;
