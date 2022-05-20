import React, { Component } from "react";
import { Link } from 'react-router-dom';



class payment_h extends Component {
  
  render() {
    return (

    <div  style={{marginTop:0}}>
           
           <h2 className="text-center" style={{marginBottom:70}}><b> Payment Management </b> </h2>
       
      <div className="container">

       <div className="row"  style={{marginTop:30}}>
            <div className="col"  style={{marginLeft:100}}>
                <Link to="/payadd" className="addnotices">
               
                    <img src="/paymentImage/add.png" width="240" height="240" alt="" />
                    <button   className="btn btn-info"  style={{marginTop:20,marginLeft:30}}><h5><b>Add Payments </b></h5></button>
                </Link>
            </div>

            <div className="col">
                    <Link to="/viewpayment" className="results">   
                    <img src="/paymentImage/view.png" width="240" height="240" alt="" />
                    <button   className="btn btn-info"  style={{marginTop:20,marginLeft:30}}><h5><b>View Payments</b> </h5></button>
                    </Link>
               
            </div>

            <div className="col">
                    <Link to="paymentreport" className="results">   
                    <img src="/paymentImage/report.png" width="240" height="240" alt="" />
                    <button   className=" btn btn-info"  style={{marginTop:20,marginLeft:30}}><h5> <b>Generate Report</b></h5></button>
                    </Link>
               
            </div>
            
       
           
      </div>
        <br></br> <br></br> <br></br>
    </div>
   </div>
  


     
       
       
    );
  }
}

export default payment_h;