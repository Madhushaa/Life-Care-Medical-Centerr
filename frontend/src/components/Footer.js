import React from "react";

function Footer(props) {
  return (
    <div className="footer">
        
      <div>
      <div style={{marginTop:30,marginLeft:5}}>
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-3">
            
            <h5>Address : </h5><br></br>
            <ul className="list-unstyled">
                <p> 
                 No : 32,<br></br>
                 Bernard Soysa Mawatha,<br></br>
                 Colombo 05.</p>
             
            </ul>
            
          </div>
          <div className="col-7 col-sm-4 text-center">
           
          </div>
          <div className="col-12 col-sm-4 align-self-center">
          <p style={{marginLeft:200}}><b>Follow Us: </b></p>
            <div className="text-center" style={{marginLeft:115}}>
              <a
                className="btn btn-social-icon btn-google bt"
                href="https://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook bt"
                href="https://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin bt"
                href="https://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter bt"
                href="https://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google bt"
                href="https://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
            <br></br>
            <p  style={{marginLeft:200}}>
              <b>Contact Us: </b><br></br><br></br>
              011-4563322 <br></br>
            
            </p>

          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <br></br>
            <p>
              Copyright 2022 © Life Care PVT LTD. All Rights Reserved.
            </p>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;