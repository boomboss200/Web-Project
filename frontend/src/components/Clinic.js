import React from 'react';
import health from "../Assets/health.jpg"
import vaccination from "../Assets/13.png"
import surgery from "../Assets/21.png"
import travel from "../Assets/1.png"

export default function Clinic() {
  return (
    <div class="container text-center" style={{marginRight:'160px'}}>
      <div class="row">
        <div class="col"><img style={{width:'247px', height:'162px'}} src={health}/>
        <h4 style={{fontSize:'20px'}} className="imagetitle-clinic">Pet Health Checkup</h4>
        <p> Get Your Pet Complete Health  <br></br>Checkup By Our Qualified Vets at  <br></br>Home..</p>
        </div>
        <div class="col"> <img style={{width:'247px', height:'162px'}} src={vaccination}/>
          <h4 style={{fontSize:'20px'}} className="imagetitle-clinic">Vaccination & Treatments</h4>
          <p> We Offer at Home <br></br> Low Cost Pet Vaccination & <br></br> Treatments..</p>
        </div>
        <div class="col"><img style={{width:'247px', height:'162px'}} src={surgery}/>
          <h4 style={{fontSize:'20px'}} className="imagetitle-clinic">Surgery Clinic</h4>
          <p> We Offer Spay/Neuter and other <br/> Miner and Major Surgeries at Our <br></br> Clinic..</p>
        </div>
        <div class="col"><img style={{width:'247px', height:'162px'}} src={travel}/>
          <h4 style={{fontSize:'20px'}} className="imagetitle-clinic">Pet Travel Documentations</h4>
          <p> We Offer affordable <br></br> Pet Travel <br></br> documentation..</p>
        </div>
        </div>
    </div>
  );
}


