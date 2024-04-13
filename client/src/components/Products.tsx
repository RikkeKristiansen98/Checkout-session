import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products') 
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      {/* Visa produkter här */}
      <div>
    
      </div>
    </>
  );
}

export default Products;
