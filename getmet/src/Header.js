import React from "react";
import Input from "./Input";
export default function Header({ query, setQuery }) {
  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container-fluid'>
        <span className='navbar-brand'>🤳🏻GetMet</span>
        <Input query={query} setQuery={setQuery} />
      </div>
    </nav>
  );
}
