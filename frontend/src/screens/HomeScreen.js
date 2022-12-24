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
import clinic from "../Assets/clinic.jpeg"
import lab from "../Assets/lab.jpeg"
import health from "../Assets/health.jpg"
import vaccination from "../Assets/13.png"
import surgery from "../Assets/21.png"
import travel from "../Assets/1.png"
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


            <div className="slider-container" style={{width: '100%', height: '100%'}}>
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

      <div class="d-flex flex-nowrap"> 
        <ImageHoverZoom imagePath={clinic}/>
        <ImageHoverZoom imagePath={lab}/>
        <ImageHoverZoom imagePath={clinic}/>
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

     
      {/* <div class="d-flex justify-content-center">
        <div>
        <img class="clinicImage" src={require('../Assets/A.jpeg')}/>
            <h1> Pet Health Checkup</h1>
        </div>

        <img class="clinicImage" src={require('../Assets/B.jpeg')}/>
        <img class="clinicImage" src={require('../Assets/B.jpeg')}/>
      </div> */}


      <div class="d-flex flex-nowrap">
      <div style={{padding:"30px"}}>      
        <img class="clinicImage" src={health}/>
        <h1 className="imagetitle-clinic">Pet Health Checkup</h1>
        <p className="imagedescription-clinic"> Get Your Pet Complete Health  <br></br>Checkup By Our Qualified Vets at  <br></br>Home..</p>

        </div>
        <div style={{padding:"30px"}}>      
          <img class="clinicImage" src={vaccination}/>
          <h1 className="imagetitle-clinic">Vaccination & Treatments</h1>
          <p className="imagedescription-clinic"> We Offer at Home <br></br> Low Cost Pet Vaccination & <br></br> Treatments..</p>
        </div>
        <div style={{padding:"30px"}}>      
          <img class="clinicImage" src={surgery}/>
          <h1 className="imagetitle-clinic">Surgery Clinic</h1>
          <p className="imagedescription-clinic"> We Offer Spay/Neuter and other <br/> Miner and Major Surgeries at Our <br></br> Clinic..</p>

        </div>
        <div style={{padding:"30px"}}>      
          <img class="clinicImage" src={travel}/>
          <h1 className="imagetitle-clinic">Pet Travel Documentations</h1>
          <p className="imagedescription-clinic"> We Offer affordable <br></br> Pet Travel <br></br> documentation..</p>
        </div>
      </div>
      
      <div style={{ display: "flex", alignItems: "center" ,marginTop:40}}>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px" ,marginLeft:70}} />
          <h1 className="heading-title-home">BLOG</h1>
        <div style={{ flex: 1, backgroundColor: "#c0c0c0", height: "2px",marginRight:60 }} />
      </div>
      
      <Blog/>
      <div class="container text-center">
      <div class="row">
      <div class="col" style={{marginBottom:'100px'}}>
      <div class="icon-box" >
      <img class="image" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_225/https://www.petsmall.pk/wp-content/uploads/2019/04/download.png"></img>
      </div>
      <div>
        <h5 class="uppercase" >FAST & FREE DELIVERY</h5>
        <p>Get Free Shipping on all orders over RS. 600 in Lahore only. Free Shipping all over the Pakistan on Online Payment Transfer.</p>
      </div>
      </div>
      <div class="col">
      <div class="icon-box" style={{width: '46px'}}>
      <img class="image" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_216,h_233/https://www.petsmall.pk/wp-content/uploads/2019/04/download-1.png"></img>
      </div>
      <div>
        <h5 class="uppercase" >CASH ON DELIVERY</h5>
        <p>100% Secure Payments by Cash on Delivery or via bank transfer and Easy pay payment Gateway. Money Back Guarantee on all Products.</p>
      </div>
      </div>
      <div class="col">
      <div class="icon-box" style={{width: '46px',  alignItems: 'center', justifyContent: 'center',}}>
      <img class="image" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_209,h_241/https://www.petsmall.pk/wp-content/uploads/2019/04/download-2.png"></img>
      </div>
      <div>
        <h5 class="uppercase">NO CUSTOM OR DUTY FEES!</h5>
        <p>Our dedicated support team available 24/7 to help our valuable customers. </p>
        <a style= {{color:'black',textDecoration: 'none'}} href="mailto:petsmallpk@gmail.com">petsmallpk@gmail.com
        </a>
        <a style= {{color:'black',textDecoration: 'none'}} href="tel:0309-9999066,0320-2881218"> / 0309-9999066,0320-2881218 
        </a>
      </div>
      </div>
      </div>
      </div>
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