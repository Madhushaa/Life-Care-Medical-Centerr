import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class updatePayment extends Component{

    

    constructor(props){

        super(props);
        this.state={
            pname:"",
            phone:"",
            appoinmentType:"",
            doctorSpecial:"",
            labtestName:"",
            pamount:"",
            pdate:"",
            pnameError:"",
            phoneError:"",
            appoinmentTypeError:"",
            doctorSpecialError:"",
            labtestNameError:"",
            pamountError:"",
            pdateError:""
      
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      alert("Are You Sure to Cancel the Process ? ");
    }

    
  
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({

            ...this.state,
            [name]:value
        })
    }


//Validate the input fields of the Form
     
    validate = () =>{

      let pnameError="";
      let phoneError="";
      let appoinmentTypeError="";
      let doctorSpecialError="";
      let labtestNameError="";
      let  pamountError="";
      let  pdateError="";
      
      

      if(!this.state.pname){
        pnameError = 'Please Fill the Name Field '
      }



      var phone= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(!this.state.phone){
          phoneError='Phone Number is Required and Fill Correct Number Format';
      }

      if(!this.state.appoinmentType){
        appoinmentTypeError = 'Please Select the Relevant Appointment Type'
      }

      if(!this.state.doctorSpecial){
        doctorSpecialError = 'Required Doctor Specialization'
      }
      if(!this.state.labtestName){
        labtestNameError = ' Required Lab Test Name '
      }
      if(!this.state.pamount){
        pamountError = 'Please Enter the Amount (LKR) '
      }
      if(!this.state.pdate){
        pdateError = 'Required the Current Date'
      }

      if(pnameError||phoneError||appoinmentTypeError||doctorSpecialError||labtestNameError||pamountError||pdateError){
        this.setState({pnameError,phoneError,appoinmentTypeError,doctorSpecialError,labtestNameError,pamountError,pdateError});
        return false;
      }
      
      return true;

    };

   

 // Using the updating route to update the form  

    onSubmit = (e) =>{

        e.preventDefault();
        const id = this.props.match.params.id;

        const isValid = this.validate();


        const{pname,phone,appoinmentType,doctorSpecial,labtestName,pamount,pdate} = this.state;

        const data ={
           
                pname:pname,
                phone:phone,
                appoinmentType:appoinmentType,
                doctorSpecial:doctorSpecial,
                labtestName:labtestName,
                pamount:pamount,
                pdate:pdate
                    
        }

        if(isValid){

        console.log(data)

        axios.put(`http://localhost:8070/payUpdate/${id}`,data).then((res)=>{
           if(res.data.success){
                alert("succesfully Payment Details were Updated !!");
                this.setState(
                    {
                        pname:"",
                        phone:"",
                        appoinmentType:"",
                        doctorSpecial:"",
                        labtestName:"",
                        pamount:"",
                        pdate:"",
                        pnameError:"",
                        phoneError:"",
                        appoinmentTypeError:"",
                        doctorSpecialError:"",
                        labtestNameError:"",
                        pamountError:"",
                        pdateError:""

      
                    }
                )
            }
        })
      }
    }

    componentDidMount(){

       const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/viewpayment/${id}`).then(res=>{

            if(res.data.success){
                this.setState({

                    pname:res.data.payment.pname,
                    phone:res.data.payment.phone,
                    appoinmentType:res.data.payment.appoinmentType,
                    doctorSpecial:res.data.payment.doctorSpecial,
                    labtestName:res.data.payment.labtestName,
                    pamount:res.data.payment.pamount,
                    pdate:res.data.payment.pdate
                });

               
            }
        });
    }


 //getting date disbling the past dates

    datelimit = () =>{
      var todayDate = new Date();
      var month = todayDate.getMonth() + 1;
      var year = todayDate.getUTCFullYear();
      var tdate = todayDate.getDate();

      if (month < 10){
          month = "0" + month
      }
      if (tdate < 10){
          tdate = "0" + tdate
      }
      var minDate = year + "-" + month + "-" + tdate;
      document.getElementById("demo").setAttribute("min",minDate);
      console.log(minDate);
  }
    
    render(){
      
        
       return (
            
        <div style={{backgroundImage:"url(http://localhost:3000/paymentImage/bg1.png)" ,
          
          backgroundRepeat:'no-repeat', 
          backgroundSize:'cover',
          marginBottom: 20,
          
          backgroundAttachment:'fixed'
      
          }}>
            <br></br>
      
        <div>
               <Link to="/viewpayment">   
                          <button className="buttonview" style={{marginLeft:814, marginBottom:30}}> View Payment Details</button>
               </Link>
        </div>
      
        <div  className="container" align="center">
      
        <div  className= "form2">
      
          <div>    
             <h3  style={{textAlign:"center" , marginTop:20}}> <b>Payment Details </b></h3>
           </div>  
               
           <hr style={{marginTop:20}}></hr>
      
           <br></br>
      
          <div class="mb-3">
                      <label class="form-label"> <b>  Name : <span style={{color:"red"}}> *</span></b></label>
                      <input type="text" class="form-control"  name="pname"
                       placeholder="Enter the name " 
                       value={this.state.pname}
                       onChange={this.handleInputChange} 
                        required/>
      
                              <div style={{fontSize:12 ,color:"red"}}>
                                 {this.state.pnameError}
                               </div>
                        
                      
          </div>
                        <br></br>
      
      
          <div class="mb-3">
                      <label class="form-label"> <b>  Phone  : <span style={{color:"red"}}> *</span></b></label>
                      <input type="text" class="form-control"  name="phone"
                       placeholder="Enter the Phone Number (Eg: 077 4545432) " 
                       value={this.state.phone}
                       onChange={this.handleInputChange} 
                        required/>
                              
                              <div style={{fontSize:12 ,color:"red"}}>
                                 {this.state.phoneError}
                               </div>
                        
                        
                      
          </div>
                        <br></br>
      
          <div class="mb-3">
                      <label class="form-label"><b> Appointment Type : <span style={{color:"red"}}> *</span></b> </label>
                              <select class="form-select"  name="appoinmentType"
                               placeholder=" Select   " 
                               value={this.state.appoinmentType}
                               onChange={this.handleInputChange}
                               required >
      
      
                              <option> Select </option>
                              <option> Doctor Chanelling  </option>
                              <option> Lab Tests  </option>
                              <option> Both(Doctor Chanelling and Lab Tests)  </option>
                              </select>
      
                                  
                              <div style={{fontSize:12 ,color:"red"}}>
                                 {this.state.appoinmentTypeError}
                               </div>
                        
                              
           </div>
      
                         <br></br>
                       
      
          <div class="mb-3">
                      <label class="form-label"><b> Doctor Specialization  : <span style={{color:"red"}}> *</span></b> </label>
                              <select class="form-select"  name="doctorSpecial"
                               placeholder=" Select   " 
                               value={this.state.doctorSpecial}
                               onChange={this.handleInputChange}
                               required >
      
      
                              <option> Select </option>
                              <option> Dr. Kalahasooriya (ALLERGY SPECIALIST)-2500/=</option>
                              <option> Dr. Samarakoon (CARDIAC ELECTROPHYSIOLOGIST)-3000/=</option>
                              <option> Dr. Bandara (GENERAL)-1000/= </option>
                              <option> Dr. Kodithuwakku (CHEST PHYSICIAN)-2500/= </option>
                              <option> None  </option>
                              </select>
      
      
                              
                              <div style={{fontSize:12 ,color:"red"}}>
                                 {this.state.doctorSpecialError}
                               </div>
                        
      
                              
           </div>
      
                         <br></br>
      
      
      
           <div class="mb-3">
                      <label class="form-label"><b> Lab Test Name  : <span style={{color:"red"}}> *</span> </b> </label>
                              <select class="form-select"  name="labtestName"
                               placeholder=" Select   " 
                               value={this.state.labtestName}
                               onChange={this.handleInputChange}
                               required >
      
      
                              <option> Select </option>
                              <option> Blood Test - 2500/=</option>
                              <option> Blood Sugar Test -1000/=</option>
                              <option> Covid 19-PCR Test -3000/= </option>
                              <option> Dengue Antigen - 3000/=</option>
                              <option> None  </option>
                              </select>
      
                              
                              <div style={{fontSize:12 ,color:"red"}}>
                                 {this.state.labtestNameError}
                               </div>
                        
      
                              
            </div>
      
                         <br></br>
      
      
      
             <div class="mb-3">
                      <label class="form-label"> <b>  Amount(LKR) : <span style={{color:"red"}}> *</span> </b></label>
                      <input type="text" class="form-control"  name="pamount"
                       placeholder=" LKR  " 
                       value={this.state. pamount}
                       onChange={this.handleInputChange} 
                        required/>
      
                        
                              <div style={{fontSize:12 ,color:"red"}}>
                                 {this.state.pamountError}
                               </div>
                        
      
                        
                      
             </div>
                        <br></br>
                      
      
                     
      
                       <br></br>
      
            <div class="mb-3">
                      <label  class="form-label"><b> Date : <span style={{color:"red"}}> *</span></b></label>
                      <input type="date" class="form-control"  name="pdate" id="demo" 
                      placeholder="YYYY/MM/DD " 
                      onSelect={this.datelimit}
                      value={this.state.pdate}
                    
                      onChange={this.handleInputChange}
                      required />
      
      
                        
                              <div style={{fontSize:12 ,color:"red"}}>
                                 {this.state.pdateError}
                               </div>
                        
      
                      
            </div>
                  
                      <br></br>
                      <br></br>
      
      
            <div style={{align:"center"}}>
                              
                       <button className='btn btn-success' type="submit" style={{marginTop:'30px',marginLeft:'240px',height: '50px', width : '100px'}} onClick={this.onSubmit}>
      
                      &nbsp;Update
      
                      </button>
      
                      <Link to="/viewpayment">   

                            <button className='btn btn-danger' style={{marginTop:'30px',marginLeft:'70px',height: '50px', width : '100px'}} onClick={this.handleClick}>

                            &nbsp;Cancel

                            </button>
                     </Link>
                      <br></br>
             
                       </div>
                         <br></br>
                
             
      
                    <br></br>
          </div>
          </div>
          <br></br>
          <br></br>
          
          </div>
         
          
         
          
      )
         
        }
}