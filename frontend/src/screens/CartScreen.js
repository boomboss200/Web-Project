import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import {BiArrowBack} from 'react-icons/bi'
export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
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
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title style={{textAlign:'center'}} >Shopping Cart</title>
      </Helmet>
     <h1 style={{fontSize:38,paddingTop:'2%'}}>
      <span style={{color:'black',fontSize:38,paddingLeft:'10%',paddingRight:'2%'}}>SHOPPING CART</span>
      >&nbsp;&nbsp;&nbsp;CHECKOUT DETAILS&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;ORDER COMPLETE
    </h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            // <MessageBox>
            //   Cart is empty. <Link to="/">Go Shopping</Link>
            // </MessageBox>
           
            <span >
              <h3 style={{fontSize:22,textAlign:'center',paddingTop:'10%'}}> Your cart is currently empty.</h3>
              <LinkContainer to={'/shop'} style={{textAlign:'center',alignItems:'center',alignContent:'center', width: "20%", height: "50px",marginLeft:'40%',fontWeight:'bold',fontSize:18,backgroundColor:' hsl(214, 32%, 39%)',color:'white'}}>
              <Button style={{}} >RETURN TO SHOP</Button>
              </LinkContainer>
            </span>
          ) : (
            <ListGroup style={{marginTop:'3%'}}>

              {/* assing add the columns name for products item name , quanity and price to abdullah */}

              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
                
              ))}
                <LinkContainer to={'/shop'} style={{textAlign:'center',alignItems:'center',alignContent:'center', width: "30%", height: "50px",marginLeft:'40%',marginTop:'3%',fontWeight:'bold',fontSize:18,backgroundColor:' hsl(214, 32%, 39%)',color:'white'}}>
                 <Button> <BiArrowBack/> &nbsp;&nbsp;CONTINUE SHOPPING</Button>
                </LinkContainer>
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card style={{marginTop:'6%'}}>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      style={{backgroundColor:'#dd3333'}}
                      variant="danger"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
