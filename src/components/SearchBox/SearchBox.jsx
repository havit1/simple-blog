import React from 'react';
import { generatePath, useRouteMatch } from 'react-router';

import {
  CustomButton,
  CustomFormControl,
  CustomInput,
} from './SearchBox.styles';

const SearchBox = ({ value, onChange, onSubmit, history }) => {
  const match = useRouteMatch();
  return (
    <>
      <CustomFormControl
        component='form'
        onSubmit={(e) => {
          e.preventDefault();
          const path = generatePath(match.path, {
            sectionId: match.params.sectionId,
            pageNum: 1,
          });
          history.replace(path);
          onSubmit(1);
          if (value.trim().length > 0) history.push(`?searchQuery=${value}`);
          else history.push('?');
        }}
      >
        <CustomInput
          type='text'
          name='query'
          placeholder='Search...'
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
        <CustomButton variant='contained' color='primary'>
          <i className='fas fa-search'></i>
        </CustomButton>
      </CustomFormControl>
    </>
  );
};

export default SearchBox;
