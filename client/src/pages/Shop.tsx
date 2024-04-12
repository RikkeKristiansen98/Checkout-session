import { useEffect, useState } from "react";
import { Products } from "../models/Products";

const Shop = () => {
    const [products, setProducts] = useState<Products[]>([]);
    const [cart, setCart] = useState<Products[]>([]);

    const addToCart = (product: Products) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3001/payments/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Produkter</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.default_price.unit_amount / 100} kr</p>
                    <img src={product.images[0]} alt={product.name} />
                    <button onClick={() => addToCart(product)}>Lägg i kundvagn</button>
                </div>
            ))}
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.default_price.unit_amount / 100} kr
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Shop;
