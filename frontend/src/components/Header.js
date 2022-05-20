import React, { Component } from "react";



class Header extends Component {
  
    
  render() {
    return ( 
    <div>
        
        <header>
   
        <div class="container1">
            <div class="logo">
                <img src="/homeImage/logo2.png" alt="Life Care Medical Center" id="logo-img"/>
            </div>
            <div class="heading">
                <h1 style={{fontSize:"80px",marginLeft:100}}><b> Life Care </b></h1> 
                <p style={{marginLeft:200 , color:"white",fontSize:"20px"}}><b> Medical Center</b> </p>
            </div>

            

        </div>
        <i class="fa fa-user fa-2x" aria-hidden="true" style={{marginLeft:1400}}> </i> &nbsp;&nbsp;
        <button type="button" class="btn btn-light" style={{marginBottom:20}}> Login </button>

     
        </header>
          
           <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
               <div class="container-fluid">
                   
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                       <li class="nav-item">
                       <a class="nav-link active" href="/home" style={{marginLeft:50}}><b>Home</b></a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="/Appointments"> <b>Appointments</b> </a>
                       </li>


                       <li class="nav-item">
                           <a class="nav-link" href="/labDashboard">
                          <b> Lab Tests</b></a>
                          
                       </li>



                       <li class="nav-item">
                                   <a class="nav-link" href="/payment">
                                      <b> Payment </b>
                                   </a>
                                   </li>
                     
                       <li class="nav-item">
                           <a class="nav-link" href="/staffdash"> <b>Staff</b> </a>
                       </li>
                    
                      

                   </ul>
               </div>
           </div>
       </nav>
       </div>
  


     
       
       
    );
  }
}

export default Header;