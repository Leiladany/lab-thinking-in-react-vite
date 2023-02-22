import { useState } from 'react';
import React from 'react'
import './Sb.css'

function SearchBar(props) {
  const [searchBar, setSearchBar] = useState('');
  const [inStock, setInStock] = useState(false);

  function handleSearch(event) {
    setSearchBar(event.target.value);
    props.handleFilterProducts(event.target.value);
  }

  function handleInStockItems(event) {
    setInStock(event.target.checked);
    props.handleInStock(event.target.checked);
  }

  return (
    <div className="search">
      <label htmlFor="search">Search</label>
      <input onChange={handleSearch} type="text" value={searchBar} />

      <div>
        <input className='checkbox'
          onChange={handleInStockItems}
          type="checkbox"
          id="inStock"
          checked={inStock}
        />
        <label className='checkp' htmlFor="inStockOnly">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar