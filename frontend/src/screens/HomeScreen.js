import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import A from "../Assets/A.jpeg"
import B from "../Assets/B.jpeg"
import C from "../Assets/C.jpeg"
import clinic from "../Assets/clinic.jpeg"
import lab from "../Assets/lab.jpeg"
import dog from "../Assets/dog.png";
import Reviews from "../components/Reviews";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../index.css';  // change this to the file path of your overrides
import ImageHoverZoom from "../components/ImageHoverZoom";
import './HScroll.css'
import Blog from '../components/Blog'
import Brand from '../components/Brand'
// import HoverMenuButton from "../components/HoverMenuButton";
// import "@reach/menu-button/styles.css";
// import "@reach/combobox/styles.css";
// import '../styles.css';  // change this to the file path of your overrides
// import data from '../data';
import Pics from '../components/3_Pics';
import Clinic from "../components/Clinic";

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
    
            <div className="slider-container" style={{width: '100%', height: '100%'}}>
        <Carousel autoPlay interval="2000" infiniteLoop className="carousel-style" showArrows={true} showThumbs={false} showStatus={false}  >
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

      <div class="row">
      <div class="col"> 
        <ImageHoverZoom imagePath={clinic}/>
      </div>
      <div class="col"><div style={{width: '85%', height: '100%'}}> 
        <ImageHoverZoom imagePath={dog}/></div>
      </div>
      <div class="col"><div> 
        <ImageHoverZoom imagePath={lab}/></div>
      </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" ,marginTop:40}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">NEW ARRIVALS</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>
   
      <div style={{ display: "flex", alignItems: "center" ,marginTop:20}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">FIND LATEST ACCESSORIES FOR YOUR PET</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>

     

   
      {loading? (
        <LoadingBox/>
      ): error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ):(

        <div className="hello" >
              {products.map((product) => (
                
              <div className="short" key={product.slug}>
                {/* <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3"> */}
                <Product product={product}></Product> 
                {/* </Col> */}
                </div>
              
              ))}
            
      </div>
      )}
    
    <div style={{ display: "flex", alignItems: "center" ,marginTop:40}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">BEST SELLING PRODUCTS</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>

      {loading? (
        <LoadingBox/>
      ): error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ):(

        <div className="hello" >
              {products.map((product) => (
                
              <div className="short" key={product.slug}>
                {/* <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3"> */}
                <Product product={product}></Product> 
                {/* </Col> */}
                </div>
              
              ))}
            
      </div>
      )}


      <div style={{ display: "flex", alignItems: "center" ,marginTop:40}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">WEEKLY DEALS</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>
   
      <div style={{ display: "flex", alignItems: "center" ,marginTop:20}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">OUR CLINIC SERVICES</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>

      <Clinic/>
      
      <div style={{ display: "flex", alignItems: "center" ,marginTop:40}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">BLOG</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>
      
      <Blog/>
      <Pics/>
      <Reviews/>

      <div style={{ display: "flex", alignItems: "center" ,marginTop:40}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">OUR TOP BRANDS</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>

      <Brand/>

      <div style={{ display: "flex", alignItems: "center" ,marginTop:40}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">LATEST PRODUCTS</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>


    {/* old products section */}
    
    {/* <h1>Featured Products</h1> */}
      {/* <div className="products">
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
      </div> */}
      
    </div>
    
  );
}
export default HomeScreen;