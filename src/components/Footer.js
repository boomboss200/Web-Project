import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h6 style={{marginTop:20}}>CONTACT US</h6>
            <div class="is-divider small"></div>
            <h6 className="list-unstyled">
            <ui className="list-unstyled">  
              <li style={{marginTop:20, fontWeight: 'normal'}}>561 Q Block, Johar Town, Shah Alam Road, Near Ayub Chowk , Lahore</li>
              <li style={{marginTop:20, fontWeight: 'normal'}}>0309-9999066 / 0320-2881218</li>
              <li style={{marginTop:20, marginBottom: 40}}><a style={{fontWeight: 'normal', textDecoration: 'none', color: 'white'}} href="/">petsmallpk@gmail.com</a></li>
              </ui>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h6 style={{marginTop:20}}>PET SUPPLIES</h6>
            <div class="is-divider small"></div>
            <ui className="list-unstyled">
              <li>At Pets Mall, we offer premium quality dog and cat food, pet supplies, and vaccination. Get everything you need for your pet!</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h6 style={{marginTop:20}}>MOBILE PET CLINIC</h6>
            <div class="is-divider small"></div>
            <ui className="list-unstyled">
              <li>If you pets need immediate veterinary’s treatment, give us a call and we will send a specialist vet to your home.</li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col">
            <h6 style={{marginTop:20}}>SIGNUP HERE</h6>
            <div class="is-divider small"></div>
            <ui className="list-unstyled">
              <li><form>
              <div class="form-group">
              <input type="email" class="Email" id="exampleInputEmail1" aria-describedby="emailHelp" style={{color: 'white'}} placeholder="Your Email (required)" />
              </div>
              <button type="submit" class="button">SIGN UP</button>
              </form></li>
            </ui>
          </div>
        </div>
      </div>
      <div className="red-tape">
          <a style={{marginLeft: 235, color: '#dadcdb',textDecoration: 'none', fontSize: 13, fontWeight: '500'}} href="">OUR STORES</a><a style={{marginLeft:20,  color: '#dadcdb',textDecoration: 'none', fontSize: 13,fontWeight: '500'}} href="">BLOG</a><a style={{marginLeft:12,  color: '#dadcdb',textDecoration: 'none', fontSize: 13,fontWeight: '500'}} href="">0309-9999066 / 0320-2881218</a>
          <div style={{marginTop: 8, paddingBottom:14}}><a style={{marginLeft: 235, marginTop: 80, color: 'white', fontWeight: '500'}} >Copyright 2022 © PETSMALL.PK | Abdullah Adnan Behzad Khadim Sana Rizwan</a></div>
          </div>
    </div>
    
  );
}

export default Footer;