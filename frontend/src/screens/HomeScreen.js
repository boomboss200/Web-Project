import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import A from "../Assets/A.jpeg"
import B from "../Assets/B.jpeg"
import C from "../Assets/C.jpeg"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../index.css';  // change this to the file path of your overrides
// import HoverMenuButton from "../components/HoverMenuButton";
// import "@reach/menu-button/styles.css";
// import "@reach/combobox/styles.css";
// import '../styles.css';  // change this to the file path of your overrides
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>PetsMall</title>
      </Helmet>
      {/* <div className="App">
      <h1>MenuButton with hover functionality</h1>
      <p>Also works with touch</p>
      <HoverMenuButton title="Dropdown 1" />
      <HoverMenuButton title="Dropdown 2" />
    </div> */}


            <div className="slider-container">
        <Carousel autoPlay interval="2000" infiniteLoop className="carousel-style" showArrows={true} showThumbs={false} showStatus={false}>
          <div className="slider-item-div">
             <img src={A}/>  
          </div>
          <div className="slider-item-div">
             <img src={B} />  
          </div>
          <div className="slider-item-div">
             <img src={C} />  
          </div>
        </Carousel>
      </div>

  
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;