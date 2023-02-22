import { useState } from 'react'
import React from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import './Pp.css'


function ProductsPage() {

  const [products, setProducts] = useState(jsonData);
  const [checkProducts, setcheckProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);
  
  function handleFilterProducts(keyword) {
    const filteredProducts = [...products].filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
    });
  
  setFilteredProducts(filteredProducts);
}

function handleStock(checked) {
    if (checked) {
      const itemStock = checkProducts.filter((product) => {
        return product.Stock === true;
      });
      setFilteredProducts(itemStock);
    } else {
      setFilteredProducts(checkProducts);
    }
  }

  return (
    <div className="components">
      <h1>IronStore</h1>
      <SearchBar
        handleFilterProducts={handleFilterProducts}
        handleStock={handleStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage