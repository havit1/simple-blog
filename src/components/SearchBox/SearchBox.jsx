import React from 'react';
import { generatePath, useRouteMatch } from 'react-router';

const SearchBox = ({ value, onChange, onSubmit, history }) => {
  const match = useRouteMatch();
  return (
    <form
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
      <input
        type='text'
        name='query'
        className='form-control my-3'
        placeholder='Search...'
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBox;
