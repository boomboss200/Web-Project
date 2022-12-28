import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Review.css'
import Rating from './Rating'
function Reviews() {
    return (
    <div className='main-review'>
         <div className="slider-container" style={{width: '100%', height: '30%'}}>
        <Carousel autoPlay interval="2000" infiniteLoop className="carousel-style" showArrows={false} showThumbs={false} showStatus={false}>
          
          <div className="slider-item-div" style={{backgroundColor:'hsl(214, 32%, 39%)',padding:"100px"}}>
            <Rating rating={4.5} />
            <p className='review-title'>Petsmall, a team which basically believe in longterm client relationship.. competitive prices with true commitment is what <br/> i found at Petsmall..</p>  
             <h1 className='review-author'>Fahmida RIAZ/facebook</h1>  
          </div>
         
          <div className="slider-item-div" style={{backgroundColor:'hsl(214, 32%, 39%)',padding:"100px"}}>
            <Rating rating={4 } />
            <p className='review-title'>thank you So much for Quality product an quality srvices, Dr.Sami Ullah Malik thankyou for being cooperative..</p>  
              <h1 className='review-author'>Ali KHAN/facebook</h1>  
          </div>
          <div className="slider-item-div" style={{backgroundColor:'hsl(214, 32%, 39%)',padding:"100px"}}>
                <Rating rating={5}/>
            <p className='review-title'>Superb online veterinary services provider. I had ordered food, clihting and done the vaccinations for my Labrador. Dr.Sami <br/> 
            is an experienced vet doctor and taking good care od pet animals at our door steps. Keep up good work, all the best.
            </p>  
                <h1 className='review-author'>Arshad Ali</h1>  
          </div>
        </Carousel>
      </div>
  </div>
  )
}

export default Reviews