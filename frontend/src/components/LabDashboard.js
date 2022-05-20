import React, { Component } from "react";
import { Link } from 'react-router-dom';


class labDashboard extends Component {
  
  render() {
    return (

        <div  style={{marginTop:"20px"}}>
           
           <h2 className="text-center"><b> Laboratory Management </b> </h2><br></br>
       
        <div className="container">

        <div className="row"  style={{marginTop:30}}>
            <div className="col"  style={{marginLeft:100}}>
                <Link to="/save" className="addnotices">
               
                    <img src="/labImage/addLab.jpg" width="240" height="240" alt="" />
                    <br></br> <br></br>
                    <br></br> 
                    <button className="btn btn-info" style={{marginLeft:10}}> <h4><b> Request Lab Test </b></h4></button>
                    
                </Link>
            </div>

            <div className="col">

                    <Link to="/labs" className="results">   
                    <img src="/labImage/viewlab.jpg" width="240" height="240" alt="" />
                    <br></br> <br></br>
                    <br></br> 
                    <button className="btn btn-info" style={{marginLeft:0}}> <h4><b>View Lab Test Details</b></h4></button>
                    </Link>
               
            </div>

            <div className="col">

                    <Link to="/PrintLabReport" className="results">   
                    <img src="/labImage/labReport.png" width="240" height="240" alt="" />
                    <br></br> <br></br>
                    <br></br> 
                    <button className="btn btn-info" style={{marginLeft:10}}> <h4><b>Generate Report </b></h4></button>
    
                    </Link>
               
            </div>
           
          </div>
            <br></br> <br></br> <br></br>
      </div>
    </div> 
       
    );
  }
}

export default labDashboard;