import styled from 'styled-components';
import { FormControl, Input, Button } from '@material-ui/core';

export const CustomFormControl = styled(FormControl)`
  && {
    padding: 20px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const CustomInput = styled(Input)`
  width: 60%;
  margin-right: 10px;
`;

export const CustomButton = styled(Button)`
  && {
    height: 100%;
  }
`;
