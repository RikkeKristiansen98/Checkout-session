import { useState, useEffect } from 'react';
import { IProduct, useCart } from '../context/CartContext';
import { Cart } from '../pages/Cart';

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const {addToCart} = useCart();


  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error('network response was not ok');
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("problem with fetch operation:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
    <div>
      <div>
        <h1>Produkter</h1>
      </div>
      {products.map((product: IProduct) => (
        <div key={product.id}>
          <figure>
            <img src={product.images[0]} alt="product"/>
          </figure>
          <div>
            <h2>{product.name}</h2>
            <p>{(product.default_price.unit_amount / 100).toFixed(2)} SEK</p>
            <p>{product.description}</p>
            <div>
              <button onClick={() => addToCart(product)}>Köp</button>
            </div>
          </div>
          <Cart />
        </div>
      ))}
    </div>
  </div>
  
  );
  
};

export default Products;