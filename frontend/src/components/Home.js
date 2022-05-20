import React, { Component } from "react";
import { Link } from 'react-router-dom';



class Home extends Component {
  
  render() {
    return (
        <div className="container">
        <br></br>
      
        <h2 className="text-center"></h2><br></br>
        <div className="row">
            <div className="col"  style={{marginLeft:200}}>
                <Link to="/Appointments" className="addnotices">
               
                    <img src="/homeImage/apoint2.jpg" width="240" height="240" alt="" /><br></br><br></br>
                    <button className="btn btn-info" style={{marginLeft:25}}><h4> Appointments  </h4></button>
                </Link>
            </div>
            <div className="col">
                 
               
                    <Link to="/labDashboard" className="results">   
                    <img src="/homeImage/lab3.png" width="240" height="240" alt="" /><br></br><br></br>
                    <button className="btn btn-info" style={{marginLeft:60}}><h4> Lab Tests  </h4></button>
                    </Link>
               
            </div>
            
        <div className="w-100"></div>
        <br></br><br></br><br></br>
            <div className="col" style={{marginLeft:200}} >
            <Link to="/payment" className="schedule">

                    <img src="/homeImage/payment1.jpg" width="240" height="240" alt=""/><br></br><br></br>
                  <button className="btn btn-info" style={{marginLeft:60}}> <h4>Payment</h4></button>
              
                </Link>
            </div>
            <div className="col" >
            <Link to="/staffdash" className="report">

                    <img src="/homeImage/staff6.jpg" width="240" height="240"  alt=""/><br></br><br></br>
                    <button className="btn btn-info" style={{marginLeft:60}}><h4> Staff </h4></button>
              
                </Link>
            </div>
        </div>
        <br></br> <br></br> <br></br>
    </div>
  


     
       
       
    );
  }
}

export default Home;