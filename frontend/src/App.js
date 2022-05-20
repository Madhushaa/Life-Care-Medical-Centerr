import React,{ Component } from 'react';
import {BrowserRouter, BrowserRouter as Router,Route} from "react-router-dom";
import './Home.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./components/Home";

//Appointments
import ViewAppointments from './components/ViewAppointments';
import Appointments from './components/Appointments';
import AddAppointments from './components/AddAppointments';
import { Example } from './components/AppointmentsReport';
import UpdateAppointments from './components/UpdateAppointments'
import './appointment.css'




//Lab Tests
import AddLab_c from './components/AddLab_c';
import ViewLabs_c from './components/ViewLabs_c';
import EditLab_c from './components/EditLab_c';
import labDashboard from './components/LabDashboard';
import LabReport_c from './components/LabReport_c';
import './lab_c.css';

//Payment
import paymentView_h from "./components/paymentView_h";
import paymentAdd_h from "./components/paymetAdd_h";
import payment_h from "./components/payment_h";
import ExamplePayment from "./components/paymentReport";
import updatePayment from "./components/updatePayment";
import './payment_h.css'


//Staff
import AddStaff from "./components/AddStaff_t"
import ViewStaff from "./components/ViewStaff_t"
import StaffDash from "./components/StaffDashboard_t"
import Update from './components/UpdateStaff_t'
import StaffReport from './components/StaffReport_t'
import './staff_t.css';


export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Header/>
      <div className="container">

        <br></br>
        <br></br> 
        <br></br>
    <Route path="/home" exact component={Home}></Route> 
      {/* Appointments */}
        <Route path = "/viewAppointments" exactc component={ViewAppointments}></Route>  
        <Route path = "/Appointments" exactc component={Appointments}></Route>
        <Route path = "/addAppointments" exactc component={AddAppointments}></Route> 
        <Route path= "/updateAppointments/:id" exact component={UpdateAppointments}></Route>
        <Route path="/appointmentReport" exact component={Example }/>
           {/*lab test */}
      <Route path="/labs" exact component={ViewLabs_c}/>
      <Route path="/save" exact component={AddLab_c}/>
      <Route path="/editLab/:id" exact component={EditLab_c}/>
      <Route path="/labDashboard" exact component={labDashboard}/>
      <Route path="/PrintLabReport" exact component={LabReport_c}/>      

              {/* Payment Routes */}
        <Route path="/viewpayment" exact component ={paymentView_h}></Route>
        <Route path="/payadd" exact component ={paymentAdd_h}></Route>
        <Route path="/payment" exact component ={payment_h}></Route>
        <Route path="/payUpdate/:id" exact component={updatePayment}></Route>
        <Route path="/paymentreport" exact component ={ExamplePayment}></Route>
        {/*Staff*/}
        <Route path="/add" exactc component={AddStaff}/>
        <Route path="/view" exact component={ViewStaff}/>
        <Route path="/staffdash" exactc component={StaffDash}/>
        <Route path="/update/:id" exact component={Update}/>
        <Route path="/report" exactc component={StaffReport}/>
      </div>

      <Footer/>
      </BrowserRouter>
    )

  }
  
}


