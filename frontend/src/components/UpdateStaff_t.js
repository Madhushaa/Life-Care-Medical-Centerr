import React, {useState, useEffect} from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Update(){

    const [firstName, setfirstName ]=useState("");
    const [lasttName, setlasttName ]=useState("");
    const [address, setaddress]=useState("");
    const [contactNumber, setcontactNumber]=useState("");
    const [nicNumber , setnicNumber ]=useState("");
    const [email , setemail]=useState("");
    const [dateOfBirth, setdateOfBirth]=useState("");
    const [gender, setgender ]=useState("Male");
    const [role, setrole]=useState("");
    const [specialization, setspecialization]=useState("");

    const [suberror, setSuberror] = useState("");

    const [subberror, setSubberror] = useState("");

    const [nicError, setNicError]=useState("");
    var nictxt="";

    const [numError,setNumError]=useState("");
    var numTxt="";

    const [maleChecked ,setMaleChecked]=useState(true);
    const [femaleChecked,setFemaleChecked]=useState(false);

    const {id}=useParams();
    console.log("Id : "+id);
    let updated=false;
    useEffect(()=>{
        if(!updated){
            updated=true;
            axios.get(`http://localhost:8070/staff/get/${id}`)
         .then(Response =>{

            setfirstName(Response.data.staff.firstName);
            setlasttName(Response.data.staff.lasttName);
            setaddress(Response.data.staff.address);
            setcontactNumber(Response.data.staff.contactNumber);
            setnicNumber(Response.data.staff.nicNumber);
            setemail(Response.data.staff.email);
            setdateOfBirth(Response.data.staff.dateOfBirth);
            setgender(Response.data.staff.gender);
            setrole(Response.data.staff.role);
            setspecialization(Response.data.staff.specialization);

            console.log("Gender : "+Response.data.staff.gender);
            genderChanged(Response.data.staff.gender);
             
         }).catch(e=>console.log(e));
 
         console.log("Fname : ");
        }

    },[])

    //function implementation
    function sendData(e){
        e.preventDefault();

        if((nicError=="Invalid NIC")||(numError=="Invalid number")||(suberror=="Maximum length is 10 Charactors")||(subberror=="Maximum length is 20 Charactors")){
            alert("Invalid Data");//Error
        }else{
        
            const newStaff={
                firstName,
                lasttName,
                address,
                contactNumber,
                nicNumber,
                email,
                dateOfBirth,
                gender,
                role,
                specialization

            }

            axios.put(`http://localhost:8070/staff/update/${id}`,newStaff).then(()=>{
                alert("staff details successfully updated")
                
            }).catch((err)=>{
                alert(err)
            })
        }
    }

    //clear button implementation
    const clearVal = ()=>{
        setfirstName('');
        setlasttName ('');
        setaddress('');
        setcontactNumber('');
        setnicNumber('');
        setemail('');
        setdateOfBirth('');
        setrole("");
        setspecialization("");

    }

    //first name validation
    function ValidateFname(tlength,ntext) {
        if (tlength > 15) {

            setSuberror("Maximum length is 15 Characters")
        }else {
            setSuberror("")
        }

        setfirstName(ntext)
    }

    //last name validation
    function ValidateLname(length,ntext) {
        if (length > 20) {

            setSubberror("Maximum length is 20 Characters")
        }else {
            setSubberror("")
        }

        setlasttName(ntext)
    }
    
    
    //NIC Validation
    function validateNIC(length,text){

        const p1=/[0-9]{9}[V,v]$/;
        const p2=/[0-9]{12}/;
         nictxt=text;
         const mtch1=nictxt.match(p1);
         const mtch2=nictxt.match(p2);
        if((length<11)&&(mtch1)){
           setNicError("");
        }else if((length<13)&&(mtch2)){
            setNicError("");
        }else{
            
            setNicError("Invalid NIC");
        }
    }


    //contact number validation
    function validateNumber(length,text){
        const p1=/\+94[0-9]{9}/;

        numTxt=text;
        const mtch=numTxt.match(p1);
        if((mtch)&&(length==12)){
            setNumError("");
        }else{
            
            setNumError("Invalid number");
        }
    }

    
    //gender checked implementation
    function genderChanged(val){
        if(val=="Male"){
            setMaleChecked(true);
            setFemaleChecked(false);
        }else{
            setMaleChecked(false);
            setFemaleChecked(true);
        }
        setgender(val);
    }

    //form implementation
    return(
    //add background image
    <div  style={{backgroundImage:"url(http://localhost:3000/images/star.jpg)"
    ,backgroundSize:'cover',

    height:'1300px',

    backgroundRepeat:'no-repeat', backgroundPosition:'center',backgroundAttachment:'fixed'

    }} >
        
        <div className="container"align="center">
            <br></br>   <br></br>
            <br></br> 
        <div>
           
            <Link to="/view">
            <button type="stafflist" class="buttonv"style={{marginLeft:400}}>View Staff List</button>
            </Link>
        </div>
            
            <br></br> 
            
        <form class="form" align="center" onSubmit={sendData} autocomplete="off">
            
            <h3 class="hstyle" align="center"><b>Update Staff Member</b></h3>
            <hr></hr>
            <br></br>
            
                <div class="mb-3 container">
                    <label for="FirstName" class="form-label"><b>First Name:</b></label>
                    <input type="text" placeholder="Enter First Name" class="form-control" id="FirstName" 
                    onChange= {(e)=>{ValidateFname(e.target.value.length,e.target.value)}}
                    value={firstName}required/><p style={{color:"red"}}>{suberror}</p>
                </div>

                <div class="mb-3 container">
                    <label for="LastName" class="form-label"><b>Last Name:</b></label>
                    <input type="text" placeholder="Enter Last Name" class="form-control" id="LastName"
                    onChange= {(e)=>{ValidateLname(e.target.value.length,e.target.value)}}
                    value={lasttName}required/><p style={{color:"red"}}>{subberror}</p>
                </div>

                <div class="mb-3 container">
                    <label for="Address" class="form-label"><b>Address:</b></label>
                    <input type="text" placeholder="Enter Address" class="form-control" id="Address"
                    onChange= {(e)=>{setaddress(e.target.value)}}
                    value={address}required/>
                </div>

                <div class="mb-3 container">
                    <label for="ContactNumber" class="form-label"><b>Contact Number:</b></label>
                    <input type="text" placeholder="Enter Contact Number  Eg:+94234567898" class="form-control" id="ContactNumber"
                    onChange= {(e)=>{setcontactNumber(e.target.value);
                    validateNumber(e.target.value.length,e.target.value);}}
                    value={contactNumber}required/> <p style={{color:"red"}}>{numError}</p>
                </div>

                <div class="mb-3 container">
                    <label for="NICtNumber" class="form-label"><b>NIC Number:</b></label>
                    <input type="text" placeholder="Enter NIC Number  Eg:199975103v" class="form-control" id="NICNumber"
                    onChange= {(e)=>{setnicNumber(e.target.value);
                    validateNIC(e.target.value.length,e.target.value);
                    }}
                    value={nicNumber}required/> <p style={{color:"red"}}>{nicError}</p>
                </div>

                <div class="mb-3 container">
                    <label for="Email" class="form-label"><b>Email:</b></label>
                    <input type="email" placeholder="Enter Email" class="form-control" id="email"
                    onChange= {(e)=>{setemail(e.target.value)}}
                    value={email}required/>
                </div>
                  
                <div class="mb-3 container">
                     <label class="form-label"><b>Date Of Birth:</b></label>
                     <input type="date" class="form-control" name="fdate" id="fdate"
                     onChange= {(e)=>{
                        var dob=new Date(e.target.value);
                         const year=dob.getFullYear();
                         const month=(dob.getMonth())+1;
                         const date=dob.getDate();

                         var monthtxt="";
                         var datetxt="";
                        
                        if(month<10){
                            monthtxt="0"+(String(month));
                        }else{
                            monthtxt=String(month);
                        }

                        if(date<10){
                            datetxt="0"+(String(date));
                        }else{
                            datetxt=String(date);
                        }
                         const bday=(String(year)+"-"+monthtxt+"-"+datetxt);

                         console.log("Birthday : "+bday)
                         
                        setdateOfBirth(bday)
                    }}
                    value={dateOfBirth}
                    />
                 </div>
                
                <div class="mb-3 container">
                <label for="Gender" class="form-label"><b>Gender:</b></label><br></br>
                <input type="radio"  name="gender" checked={maleChecked} id="Malerb" value="Male" onClick= {(e)=>{
                        genderChanged(e.target.value);
                        
                        
                    }}/> <label for="Malerb" class="form-label">Male</label>

                <input type="radio"  name="gender"  id="Femalerb" checked={femaleChecked} style={{marginLeft:20}}value="Female"onClick= {(e)=>{
                        genderChanged(e.target.value);
                        
                    }}/> <label for="Femalerb" class="form-label">Female</label>
                </div>

                <div class="mb-3 container">
                <label for="Role" class="form-label"><b>Role:</b></label>
                <br></br>
                
                            <select name="Role" class="form-select" id="Role"placeholder="select"
                             onChange= {(e)=>{setrole(e.target.value)}}value={role}>
                                <option value="" disabled selected hidden>Select</option>
                                <option value="Doctor" >Doctor</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Lab Assistant">Lab Assistant</option>  
                            </select>
                 </div>

                <div class="mb-3 container">
                <label for="specialization" class="form-label"><b>Specialization:</b></label>
                <br></br>

                        <select name="specialization" class="form-select" id="specialization"
                            onChange= {(e)=>{setspecialization(e.target.value)}}value={specialization}>
                                
                                <option value="" selected disabled hidden>Select</option>
                                <option value="General">General</option>
                                <option value="Cardiologist">Cardiologist </option>
                                <option value="Dermatologists">Dermatologists</option>
                                <option value="Neurologist">Neurologist </option>
                                <option value="Physiotherapist">Physiotherapist </option>
                                <option value="Psychiatrists ">Psychiatrists </option>
                                <option value="Urologist">Urologist</option>  
                        </select>
                 </div>

                <br></br>
                
                <button type="submit" class="buttonu"style={{marginLeft:90}}>Update</button>
                
                <Link to="/view" className="viewstaff">
                <button type="cancel"  class="buttonc"style={{marginLeft:90}} onClick={()=>alert("Are you sure to cancel the process")}>Cancel </button>
                </Link>
            </form>
            <br></br> <br></br>
        </div>
        </div>
    );
}