import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';
import Product from '../components/Product';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import '../index.css'



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
  

const ShowCase = () => {  

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
      
    return(
    <>
    <h1>All Products</h1>
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
    </>
  )
}

export default ShowCase

