import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Blog.css'

function Blogs() {
    return (
    <div className='blog-review'>
         <div className="blog-container" style={{width: '100%', height: '30%'}}>
        <Carousel autoPlay interval="2000" infiniteLoop className="carousel-style" showArrows={true} showThumbs={false} showStatus={false} showIndicators={false}>
          
          <div className="slider-item-div" >
            <div class="d-flex justify-content-center" >
                <div style={{marginRight:'30px'}}>
                    <p className='blog-title'>Best Vietanary Clinic in Lahore</p>  
                        <p className='blog-date'>June 22,2019</p>  
                    <h1 className='blog-description'>Vietanary Clinic in Lahore People are interested to keep animals at home, especially kids love to ...</h1> 
                </div> 
                
                <div style={{marginRight:'30px'}}>
                    <p className='blog-title'>Best Pet Clinic in Johar Town</p>  
                        <p className='blog-date'>June 19,2019</p>  
                    <h1 className='blog-description'>Pet Clinic in Johar Town are you looking for diet consultation and medical checkup of ...</h1> 
                </div> 
                <div style={{marginRight:'30px'}}>
                    <p className='blog-title'>Pet Hospital in Lahore</p>  
                        <p className='blog-date'>June 29,2019</p>  
                    <h1 className='blog-description'>Pet Hospital in Lahore Pets are the animal kept in the homes for certian reasons ...</h1> 
                </div> 
             </div>

          </div>
         
          <div className="slider-item-div" >
            
            <div class="d-flex justify-content-center" >
               
                
                <div style={{marginRight:'30px'}}>
                    <p className='blog-title'>Best Pet Clinic in Johar Town</p>  
                        <p className='blog-date'>June 19,2019</p>  
                    <h1 className='blog-description'>Pet Clinic in Johar Town are you looking for diet consultation and medical checkup of ...</h1> 
                </div> 
                
                <div style={{marginRight:'30px'}}>
                    <p className='blog-title'>Pet Hospital in Lahore</p>  
                        <p className='blog-date'>June 29,2019</p>  
                    <h1 className='blog-description'>Pet Hospital in Lahore Pets are the animal kept in the homes for certian reasons ...</h1> 
                </div> 

                <div style={{marginRight:'30px'}}>
                    <p className='blog-title'>Best Vietanary Clinic in Lahore</p>  
                        <p className='blog-date'>June 22,2019</p>  
                    <h1 className='blog-description'>Vietanary Clinic in Lahore People are interested to keep animals at home, especially kids love to ...</h1> 
                </div> 
               
             </div> 
          </div>


          <div className="slider-item-div" style={{paddingBottom:'60px'}}>
                
          <div class="d-flex justify-content-center" >
               
             <div style={{marginRight:'30px'}}>
                   <p className='blog-title'>Pet Hospital in Lahore</p>  
                       <p className='blog-date'>June 29,2019</p>  
                   <h1 className='blog-description'>Pet Hospital in Lahore Pets are the animal kept in the homes for certian reasons ...</h1> 
               </div> 
               <div style={{marginRight:'30px'}}>
                   <p className='blog-title'>Best Pet Clinic in Johar Town</p>  
                       <p className='blog-date'>June 19,2019</p>  
                   <h1 className='blog-description'>Pet Clinic in Johar Town are you looking for diet consultation and medical checkup of ...</h1> 
               </div> 

               <div style={{marginRight:'30px'}}>
                   <p className='blog-title'>Best Vietanary Clinic in Lahore</p>  
                       <p className='blog-date'>June 22,2019</p>  
                   <h1 className='blog-description'>Vietanary Clinic in Lahore People are interested to keep animals at home, especially kids love to ...</h1> 
               </div> 
              
            </div> 
          </div>
        </Carousel>
      </div>
  </div>
  )
}

export default Blogs