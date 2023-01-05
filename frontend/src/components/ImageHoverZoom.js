import React from 'react'
import "../index.css"
import Button from 'react-bootstrap/esm/Button';
const ImageHoverZoom = ({ imagePath }) => {
    return (
      <div className="image-outerwrapper">
      <div className="img-wrapper">
       
       <Button style={{backgroundColor:"white",border:'0px'}}>
        <img src={imagePath} alt="" className="hover-zoom" />
        <p className="image-header">Pets Clinic</p>
        </Button>
      </div>
      </div>
    );
  };
  export default ImageHoverZoom;