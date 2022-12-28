import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import './product.css'

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="card-home">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="img-card"  alt={product.name} />
      </Link>
      <div className='card-body'>
      <Card.Body>
        <div>
        <Card.Text className="product-category">{product.category}
        </Card.Text>
        </div>
        <div>
        <Link className="product-desc" to={`/product/${product.slug}`}>
          <Card.Title className="product-desc">{product.name}</Card.Title>
        </Link>
        </div>
        <div>
        <Card.Text className="product-price">Rs{product.price}
        </Card.Text>
        </div>
        {product.countInStock === 0 ? (
          <Button className="btn-card">
            READ MORE
          </Button >
        ) : (
          <Button className="btn-card" onClick={() => addToCartHandler(product)}>ADD TO CART</Button>
        )}

      </Card.Body>
      </div>
    </Card>
  );
}
export default Product;
