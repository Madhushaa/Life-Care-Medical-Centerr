import React,{Component} from "react"
import axios from "axios";

export default class ViewAppointments extends Component{
    constructor(props){
        super(props);

        this.state={
            appointments:[]

        };
    }

    componentDidMount(){
        this.retrieveAppointments();
    }

    retrieveAppointments(){
        axios.get("http://localhost:8070/Appointments/view").then(res =>{
            if(res.data.success){
                this.setState({
                    appointments:res.data.existingAppointments
                });

                console.log(this.state.appointments)
            }
        });
    }

    //delete function
    onDelete=(id)=>{
        axios.delete(`http://localhost:8070/Appointments/delete/${id}`).then((res)=>{
            alert("Appointment Successfully Deleted..");
            this.retrieveAppointments();
            
        })
    }

    //filter data function for search 
    filterData(appointments,searchkey){
        const result = appointments.filter((appointments)=>
        appointments.firstName.toLowerCase().includes(searchkey)||
        appointments.lastName.toLowerCase().includes(searchkey)||
        appointments.doctor.toLowerCase().includes(searchkey)
        )
        this.setState({appointments:result})
    }

    //search function
    handleSearchArea = (e) => {
        const searchKey= e.currentTarget.value;

        axios.get("http://localhost:8070/Appointments/view/").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingAppointments,searchKey)
            }    
        })
    }

 
  

render(){
    return(
        
          
    <div >

    <h1 align= 'center'><b> Patients Appointments</b> </h1>

    <div className="container" style={{marginLeft:'1px'}} >
    
        &nbsp;
        
        <div className="row">
            &nbsp;
            <div className="col-lg-3 mt-2 mb-2" >
                <input className = "form-control"
                    type="search"
                    placeholder="Search..."
                    name="searchappointments"
                    onChange={this.handleSearchArea}>
                </input>
            </div>
   </div>
   
    <hr ></hr>

    <table className="table table-striped"  style={{}}>
        <thead>
            <tr class="table-primary" >
                <th scope="col"></th>
                <th scope="col" style={{textAlign:'center'}}>Patient's Name</th>
                <th scope="col" style={{textAlign:'center'}}>Age</th>
                <th scope="col" style={{textAlign:'center'}}>Gender</th>
                <th scope="col" style={{textAlign:'center'}}>NIC</th>
                <th scope="col" style={{textAlign:'center'}}>Contact Number</th>
                <th scope="col" style={{textAlign:'center'}}>Doctor</th>
                <th scope="col" style={{textAlign:'center'}}>Date</th>
                <th scope="col" style={{textAlign:'center'}}>Time</th>
                <th scope="col" style={{textAlign:'center'}}>Actions</th>
                <th scope="col"></th>     
            </tr>

        </thead>

        <tbody>
            {this.state.appointments.map((appointments,index) =>(
            <tr>
                <th  scope = "row"  style={{textAlign:'center'}}>{index+1} </th>
                    <td style={{width:'200px' }}> {appointments.firstName} {appointments.lastName}</td>
                    <td style={{width:'55px' ,textAlign:'center'}}> {appointments.age}</td>
                    <td style={{width:'75px' ,textAlign:'center'}}> {appointments.gender}</td>
                    <td style={{width:'110px' ,textAlign:'center'}}> {appointments.nic}</td>
                    <td style={{width:'160px' ,textAlign:'center'}}> +94{appointments.contact_no}</td>
                    <td style={{width:"220px" }}> {appointments.doctor}</td>
                    <td style={{width:'115px' ,textAlign:'center'}}> {appointments.date}</td>
                    <td style={{width:"110px",textAlign:'center'}} > {appointments.time}</td>
                    <td style={{width:'290px'}}> &nbsp;
                    &nbsp;
                        <a className="btn btn-warning" href={`/updateAppointments/${appointments._id}`}>
                        <i className="fas fa-edit"/> &nbsp;Edit </a>

                        &nbsp;
                        &nbsp;
                       
                        <a  className="btn btn-danger" href="#" style={{marginRight:'1px'}}  onClick={() =>this.onDelete(appointments._id)}>
                        <i className="fas fa-trash"  /> &nbsp; Delete </a>
                    </td>
            </tr>
          ))}
        </tbody>
    </table>
        
</div>

</div>


)

}}
