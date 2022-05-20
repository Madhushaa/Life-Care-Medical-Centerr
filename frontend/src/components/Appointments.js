import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../Home.css'

class Appointments extends Component {

  render() {
    return ( 
        <div className="container">
        
            <h2 className="text-center"><b>Appointments Management </b></h2>
            <br></br>
            <br></br>

            <div className="row">

                <div className="col" style={{marginLeft:'23px'}}  >
                    <Link to="/addAppointments" className="">                
                        <img src="/images_m/add.jpg" width="270" height="240" alt="Add New Appointments" />
                        <button className="btn btn-info" style={{marginLeft:0 ,marginRight:'0',marginTop:10,width:'295x'}}><h4 > <b> Add New Appointments</b>  </h4></button>
                    </Link>
                </div>

                <div className="col" style={{marginLeft:'100px'}}>
                    <Link to="/viewAppointments" className="">   
                        <img src="/images_m/view.JPG" width="230" height="240" alt="View Appointments" />
                        <button className="btn btn-info" style={{marginLeft:1,marginTop:10}}><h4 ><b> View Appointments </b> </h4></button>
                    </Link>
                </div>
                
                <div className="col" style={{marginLeft:'110px'}}>
                    <Link to="/appointmentReport" className="schedule">
                        <img src="/images_m/report.jpg" width="240" height="240" alt=""/>

                        <button className="btn btn-info" style={{marginLeft:10 ,marginTop:10}}><h4> <b>Generate Reports</b>  </h4></button>
                    </Link>
                </div>
            
            </div>
            <br></br> 
            <br></br> 
            <br></br>
        </div>  
    );
  }
}

export default Appointments;