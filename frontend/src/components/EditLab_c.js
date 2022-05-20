import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class EditLab_c extends Component {


    constructor(props){
        super(props);
        this.state={
            name:"",
            id:"",
            age:"",
            gender:"",
            date:"",
            labTest:"",
            labNo:"",
            technologist:"",
            status:"",
            nameError:"",
            idError:"",
            dateError:"",
            labTestError:""

        }

        this.handleClick = this.handleClick.bind(this);

    }

    //alert box
    handleClick() {
        alert ("Are you sure to cancel the process?");
        
    }

    
    //handle input changes
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    //validate form details
    validate = () =>{

        let nameError="";
        let idError="";
        let dateError="";
        let labTestError="";
  
        if(!this.state.name){
          nameError = 'Please Fill the name field'
        }

        if(!this.state.id){
            idError = 'Please Fill the id field '
          }

        if(!this.state.date){
            dateError = 'Please Fill the date field '
          }

        if(!this.state.labTest){
            labTestError = 'Please Fill the test field '
          }

        if(nameError||idError||dateError||labTestError){
            this.setState({nameError,idError,dateError,labTestError});
            return false;
          }
          

        return true;

        };

    //save updated data into database
    onSubmit = (e) =>{

        e.preventDefault();
        const isValid = this.validate();

        const{name,id1,age,gender,date,labTest,labNo,technologist,status} = this.state;

        const id = this.props.match.params.id;

        const data = {
            name:name,
            id:id1,
            age:age,
            gender:gender,
            date:date,
            labTest:labTest,
            labNo:labNo,
            technologist:technologist,
            status:status    

        }

        if(isValid){
        console.log(data)

        axios.put(`http://localhost:8070/lab/update/${id}`,data).then((res)=>{

            alert("Successfully Updated The Lab Test");
            
            if(res.data.success){
                this.setState(
                    {
                        name:"",
                        id:"",
                        age:"",
                        gender:"",
                        date:"",
                        labTest:"",
                        labNo:"",
                        technologist:"",
                        status:"",
                        nameError:"",
                        idError:"",
                        dateError:"",
                        labTestError:""

                    }
                )
                }
        })

    }   

    }


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/lab/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    name:res.data.lab.name,
                    id:res.data.lab.id,
                    age:res.data.lab.age,
                    gender:res.data.lab.gender,
                    date:res.data.lab.date.toString().substr(0 ,10),
                    labTest:res.data.lab.labTest,
                    labNo:res.data.lab.labNo,
                    technologist:res.data.lab.technologist,
                    status:res.data.lab.status
                    
                });

                console.log(this.state.lab);
            }
        });
    }

    //disable previous dates in calender
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


    render() {
        return(
            <div  style={{backgroundImage:"url(http://localhost:3000/labImage/bglab1.jpg)",height:'1300px',backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}} >
            <div>
            <br></br>
            <Link to="/labs" className="results">
            <button className="btn btn-primary" style={{marginLeft:890,marginBottom:20}}>View All Lab Tests</button> 
            </Link>
            
            <div className='container' align='center'>
            <form className="formc" >
                <div className='form-group' style={{marginBottom:'15px'}}>
                <h1 className='h3 mb-3 font-weight-normal'style={{textAlign:"center"}}>Update Laboratory Test</h1>
                <hr></hr>
                <br></br>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Patient Name </label><label style={{color:"red"}}> &nbsp;* </label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Patient Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required/>

                    <div style={{fontSize:12 ,color:"red"}}>       
                           {this.state.nameError}
                    </div>
                </div>
                <br></br>
                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Patient ID</label> <label style={{color:"red"}}> &nbsp;* </label>
                    <input type="number"
                        className="form-control"
                        name="id"
                        placeholder="Enter Patient ID"
                        value={this.state.id}
                        onChange={this.handleInputChange}
                        required/>

                    <div style={{fontSize:12 ,color:"red"}}>       
                           {this.state.idError}
                    </div>
                </div>

                <br></br>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Age</label>
                    <input type="number"
                        className="form-control"
                        name="age"
                        placeholder="Enter Patient Age"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        required/>
                </div>

                <br></br>

                <div className='form-group' style={{marginBottom:'15px'}}
                    value={this.state.gender}
                    onChange={this.handleInputChange}>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Gender</label>
                    <br></br>
                    <input type="radio" value='Male' name="gender" checked={this.state.gender==='Male'}/> Male &nbsp;  &nbsp;
                    <input type="radio" value='Female' name="gender" checked={this.state.gender==='Female'}/> Female
                
                </div>

                <br></br>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Date</label> <label style={{color:"red"}}> &nbsp;* </label>
                    <input type="date"
                        className="form-control"
                        name="date"
                        placeholder="Enter Date"
                        id="demo"
                        onSelect={this.datelimit}
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        required/>
                    <div style={{fontSize:12 ,color:"red"}}>       
                           {this.state.dateError}
                    </div>
                </div>

                <br></br>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Laboratory Test</label> <label style={{color:"red"}}> &nbsp;* </label>
                        <select class="form-select" name="labTest"
                            placeholder=" Select   "
                            value={this.state.labTest}
                            onChange={this.handleInputChange}
                            required>

                                <option> Select </option>
                                <option> Blood Suger </option>
                                <option> Covid-19 Antigen</option>
                                <option> Covid-19 PCR </option>
                                <option> Dengue Antigen </option>
                                <option> Full Blood Count </option>
                    
                            </select>

                    <div style={{fontSize:12 ,color:"red"}}>       
                           {this.state.labTestError}
                    </div>
                </div>

                <br></br>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Laboratory No</label>
                        <select class="form-select" name="labNo"
                            placeholder=" Select   "
                            value={this.state.labNo}
                            onChange={this.handleInputChange}>
                                <option> Select </option>
                                <option> 1 </option>
                                <option> 2</option>
                                <option> 3 </option>
                                <option> 4 </option>

                        </select>
                </div>

                <br></br>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Laboratory Technologist</label>
                        <select class="form-select" 
                            placeholder=" Select   "
                            name="technologist"
                            value={this.state.technologist}
                            onChange={this.handleInputChange}>
                                <option> Select </option>
                                <option> Mr. Sarath Ranaweera </option>
                                <option> Mrs. Dayarathna</option>
                                <option> Mr. Jagath Perera </option>
                                <option> Mr. Dammika Siriwardana </option>

                        </select>
                </div>

                <br></br>

                <div className='form-group' style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight: 'bold'}}>Status</label>
                        <select class="form-select" 
                            placeholder=" Select   "
                            name="status"
                            value={this.state.status}
                            onChange={this.handleInputChange}>
                                <option> Select </option>
                                <option> Pending </option>
                                <option> Repeat </option>
                                <option> Completed </option>
                   
                        </select>
                </div>


                <button className='btn btn-success' type="submit" style={{marginTop:'25px',marginLeft:'150px',height: '50px', width : '100px'}} onClick={this.onSubmit}>
                &nbsp;Update
                </button>
               
                <Link to="/labs" className="results">
                <button className='btn btn-danger' type="submit" style={{marginTop:'25px',marginLeft:'120px',height: '50px', width : '100px'}} onClick={this.handleClick}>
                &nbsp;Cancel
                </button>
                </Link>
                
            </form>
            </div>
            <br></br>
            <br></br>
            
        </div>
        </div>
        
        )
       
    }
}