import React from 'react';

const SearchBox = ({ value, onChange, onSubmit, history }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
