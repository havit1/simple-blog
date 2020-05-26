import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled('div')`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredPaper = styled(Paper)`
  padding: 20px;
  margin: 0 auto;
  width: 80%;
  height: 50%;
  min-height: 200px;
`;

export const CustomMessageTypography = styled(Typography)`
  && {
    margin: 0 auto;
    width: 100%;
    font-size: 3rem;
    text-align: center;
  }
`;

export const LoadindWrapper = styled('span')`
  height: 80vh;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
