import { useState, useEffect } from 'react';
import { IProduct, useCart } from '../context/CartContext';
import { Modal, Button } from 'react-bootstrap';

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(true);

  const { addToCart } = useCart();

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

  const handleAddToCart = (product: IProduct) => {
    addToCart(product);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <div>
        <h1>Produkter</h1>
      </div>
      {products.map((product: IProduct) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <figure>
            <img src={product.images[0]} alt="product"/>
          </figure>
          <div>
            <p>{(product.default_price.unit_amount / 100).toFixed(2)} SEK</p>
            <p>{product.description}</p>
            <div>
              <button onClick={() => handleAddToCart(product)}>Köp</button>
            </div>
          </div>
        </div>
      ))}
<Modal
  show={showModal}
  onHide={handleClose}
  centered
>
  <Modal.Body style={{display: 'flex', alignItems: 'center'}}>
    <p>Varan har lagts till i din kundvagn.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModal(false)}>
      Stäng
    </Button>
  </Modal.Footer>
</Modal>


    </div>
  );
};

export default Products;
