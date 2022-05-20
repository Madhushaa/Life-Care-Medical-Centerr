import axios from "axios";
import React,{Component} from "react"
import { Link } from "react-router-dom";
import background from "../background_m/appoiintment_image.jpg";


export default class UpdateAppointments extends Component{

    constructor(props){
        super(props);
        this.state= {
            nicError:"",
            phoneError:"",
            firstName: "", 
            lastName: "", 
            age: "", 
            gender: "",        
            nic: "",
            country_code: "",        
            contact_no: "", 
            doctor: "",        
            date: "",        
            time: ""
        }

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        alert("Are you sure to cancel the process?")
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/Appointments/view/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    firstName:res.data.appointments.firstName,
                    lastName:res.data.appointments.lastName,
                    age:res.data.appointments.age,
                    gender:res.data.appointments.gender,
                    nic:res.data.appointments.nic,
                    country_code:res.data.appointments.country_code,
                    contact_no:res.data.appointments.contact_no,
                    doctor:res.data.appointments.doctor,
                    date:res.data.appointments.date,
                    time:res.data.appointments.time
                });
                console.log(this.state.appointments);
            }
        });
    }

    handleInputChange = (e) =>{
        const{name,value}= e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit= (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const { firstName,lastName,age,gender,nic,country_code,contact_no,doctor,date,time}= this.state;

        const data ={
            firstName:firstName,
            lastName:lastName,
            age:age,
            gender:gender,
            nic:nic,
            country_code:country_code,
            contact_no:contact_no,
            doctor:doctor,
            date:date,
            time:time
        }

        if(this.state.nicError=="Invalid NIC!!!"){
            alert('Please Enter a valid NIC..')
            
            }else if (this.state.phoneError=="Invalid Phone number!!!"){
                alert('Please Enter a valid Contact Number..')
                
                }else{
                    axios.put(`http://localhost:8070/Appointments/update/${id}`,data).then((res) =>{
                        if(res.data.success){
                            alert("Appointment Successfully Updated...")
                            this.setState(
                            { 
                                firstName: "", 
                                lastName: "", 
                                age: "", 
                                gender: "",        
                                nic: "",
                                country_code: "",        
                                contact_no: "", 
                                doctor: "",        
                                date: "",        
                                time: ""
                            })
                        }
                    })
                }
    }

    //validate NIC
    validateNic = (e) => {
        var nic = e.target.value
    
        if (!this.nicValidation(nic)) {
            this.setState({nicError:""})
        } 
        else {
            this.setState({nicError:"Invalid NIC!!!"})
        }
    }

    nicValidation = (nic) => {
        if (nic.length == 10 || nic.length == 12) {
            if (nic.length ===10) {
                // last letter should V
                const lastLetter = nic[nic.length - 1];
                const numbers = nic.slice(0, nic.length - 1);
                console.log(numbers, !isNaN(numbers))
                if ((lastLetter === 'V' || lastLetter === 'v') && !isNaN(numbers)) return false;
        
                return true;
            }
                // if length 12
                else if (nic.length == 12) {
                    // only digits
                    if (!isNaN(nic)) return false;
        
                    return true;
                }
        }
        else {
          return true;
        }
    };


    //validate contact number
    validatePhone = (e) => {
        var contact_no = e.target.value
    
        if (!this.phoneValidation(contact_no)) {
            this.setState({phoneError:""})
        } else {
            this.setState({phoneError:"Invalid Contact Number!!!"})
        }
    }

    phoneValidation= (contact_no) => {
        if (contact_no.length == 9) {
          // last number should 0
          const firstLetter = contact_no[0];
          const numbers = contact_no.slice(0, contact_no.length - 1);
          console.log(numbers, !isNaN(numbers))
          if ((firstLetter != '0' ) && !isNaN(numbers)) return false;
  
          return true;
        }
        else {
          return true;
      }
    };

    datelimit= () => {
        var todayDate = new Date();
        var month = todayDate.getMonth() + 1; // current month
        var year = todayDate.getUTCFullYear();// current year
        var tdate = todayDate.getDate();// current date
    
        if (month < 10) {
          month = "0" + month
        }
        if (tdate < 10) {
          tdate = "0" + tdate
        }
        var minDate = year + "-" + month + "-" + tdate;
        document.getElementById("demo").setAttribute("min", minDate);
        console.log(minDate)
      }


render(){
    return(
        
        <div style={{backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>            
    
        <div className ="container" >

            <br></br>

            <Link to="/viewAppointments" className="">                
                <button className="btn btn-primary" type='submit' style={{marginLeft:'545px', marginBottom:'30px', height:'45px'}}> View All Appointments </button>
            </Link>

            <br></br>

            <form  className="form1" style={{backgroundColor:'#ffff',padding:'30px 30px',width:'650px',marginLeft:'80px '}}  > 
                <h1 style={{textAlign:'center'}}>Update Appointment </h1> <hr></hr>

                <div className="form-group row g-3">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label"><b>Name</b></label>
                    <div className="col">
                        <input className="form-control" type="text" name='firstName' id="firstName" placeholder="First Name" 
                            value={this.state.firstName}
                            onChange={this.handleInputChange} 
                        required />
                    </div>
                                    
                    <div className="col">
                        <input className="form-control" type="text" name='lastName' id="lastName" placeholder="Last Name" 
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        required />
                    </div>
                        
                </div>
                    
                <br></br>

                <div className="form-group row g-3">
                    <label htmlFor="nic" className="col-sm-2 col-form-label"><b>NIC</b></label>
                        <div className="col-auto">
                            <input className="form-control" type="text" name='nic'  placeholder="Enter NIC"
                                value={this.state.nic}
                                onSelect={this.validateNic}
                                onChange={this.handleInputChange}
                            required  />
                            <span style={{fontWeight: 'bold',color: 'red'}}> {this.state.nicError} </span>
                        </div>
                                
                </div>
                
                <br></br>

                <div className="form-group row g-3">
                    <label htmlFor="age" className="col-sm-2 col-form-label"> <b> Age</b></label>
                        <div className="col-auto">
                            <input className="form-control" type="text" name='age' id="age" placeholder="Enter Age" 
                                value={this.state.age}
                                onChange={this.handleInputChange} 
                            required/>
                        </div>
                </div>
                    
                <br></br>

                <div className="form-group row g-3 ">
                    <label htmlFor="gender"  className="col-sm-2 col-form-label"><b>Gender</b></label>
                        <div className="col-auto">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="Male" 
                                    value={this.state.gender} checked={this.state.gender === 'Male'}
                                    onChange={this.handleInputChange}/>
                                <label class="form-check-label"  for="flexRadioDefault1"> Male </label>
                            </div>

                        </div>

                        <div className="col-auto">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="Female" 
                                    value={this.state.gender} checked={this.state.gender === 'Female'}
                                    onChange={this.handleInputChange} />
                                <label class="form-check-label"  for="flexRadioDefault1"> Female</label>
                            </div>
                        </div>
                </div>

                <br></br>
                            
                <div className="form-group row g-3">
                    <label htmlFor="" className="col-sm-2 col-form-label"><b>Contact Number &nbsp;</b></label>
                        <div className="col-auto">
                            <input className="form-control" type='text' placeholder="+94" id="country_code" style={{width: '70px'}} Value="+94"
                                value={this.state.country_code}
                                onChange={this.handleInputChange} disabled>
                            </input>
                        </div>

                        <div className="col-auto" >
                            <input className="form-control" type="text" name='contact_no' id="contact_no" placeholder="ex:- 76895243 "  style={{width:'90%'}}
                                value={this.state.contact_no}
                                onSelect={this.validatePhone}
                                onChange={this.handleInputChange}
                            required />
                            <span style={{fontWeight: 'bold',color: 'red'}}> {this.state.phoneError} </span>
                        </div>
                </div>
                
                <br></br>
                        
                <div className="form-group row g-3">
                    <label htmlFor="doctor" className="col-sm-2 col-form-label"><b>Doctor</b></label>
                        <div className="col">
                            <select className="form-control" name="doctor" id="doctor" style={{width:'48%'}}  value={this.state.doctor} onChange={this.handleInputChange}  required  >
                            <option Value="">Choose a Doctor</option>
                            <option value="Dr.Menaka Rajasooriya (Cardiologist)"> Dr.Menaka Rajasooriya (Cardiologist)</option>
                            <option value="Dr.Herath Wijesooriya (General)" > Dr.Herath Wijesooriya (General)</option>
                            <option value=" Dr.Ananda Fernando (Dermologists)" > Dr.Ananda Fernando (Dermologists)</option>
                            <option value="Dr.Nadini Premadasa (General)" > Dr.Nadini Premadasa (General)</option>
                            <option value="Dr.Madhusha Karunarathne (Neurologist)" > Dr.Madhusha Karunarathne (Neurologist)</option>
                            </select>
                        </div>
                </div>

                <br></br>

                <div className="form-group row g-3">
                    <label htmlFor="date" className="col-sm-2 col-form-label"><b>Date</b></label>
                        <div className="col">
                            <input className="form-control" type="date" name='date' id="demo" 
                                    value={this.state.date}
                                    onSelect={this.datelimit}
                                    onChange={this.handleInputChange}
                            required  />
                        </div>
                                
                    <label htmlFor="time" className="col-sm-2 col-form-label">  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                        <b> Time</b>
                    </label>
                    <div className="col">
                        <select className="form-control" name="time" id="time" style={{width:'60%'}} value={this.state.time} onChange={this.handleInputChange}  required  >
                            <option Value="">Select Time</option>
                            <option value="08:00"> 08:00 </option>
                            <option value=" 08:30"> 08:30 </option>
                            <option value="09:00"> 09:00 </option>
                            <option value="09:30"> 09:30 </option>
                            <option value=" 10:00"> 10:00 </option>
                            <option value="10:30 "> 10:30 </option>
                            <option value="16:00"> 16:00 </option>
                            <option value=" 16:30"> 16:30 </option>
                            <option value="17:00"> 17:00 </option>
                            <option value="17:30"> 17:30 </option>
                            <option value=" 18:00"> 18:00 </option>
                            <option value="18:30"> 18:30 </option>
                            <option value="19:00"> 19:00 </option>
                        </select>
                    </div>

                </div>


                <br></br>
                <br></br>

                <button className="btn btn-primary" type="submit" style={{marginLeft:'20%',width:'100px',height:'45px'}} onClick={this.onSubmit}>
                    Update
                </button>

                <Link to="/viewAppointments" className="">    
                    <button className="btn btn-danger" type="submit" style={{marginLeft:'22%',width:'100px',height:'45px'}} onClick={this.handleClick}  >
                        Cancel
                    </button>
                </Link>

    </form>
    <br></br>
    <br></br>
                    
    </div> </div>
)
}
}

