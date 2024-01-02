import React from "react";
export default function Input({ query, setQuery }) {
  return (
    <form className='d-flex' role='search'>
      <input
        class='form-control me-2'
        type='search'
        placeholder='Search Contact..'
        aria-label='Search'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
}
