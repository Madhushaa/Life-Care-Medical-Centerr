import React from "react";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'
import axios from "axios";

export default class ComponentToPrint extends React.PureComponent {
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

filterData(appointments,searchkey){
    const result = appointments.filter((appointments)=>
    appointments.firstName.toUpperCase().includes(searchkey)||
    appointments.firstName.toLowerCase().includes(searchkey)||
    appointments.lastName.toUpperCase().includes(searchkey)||
    appointments.lastName.toLowerCase().includes(searchkey)||
    appointments.doctor.toUpperCase().includes(searchkey)||
    appointments.doctor.toLowerCase().includes(searchkey)
    
    )
    this.setState({appointments:result})
}

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
        <div className="col-lg-3 mt-2 mb-2" style={{marginLeft:'0px'}}>
          <input className = "form-control"
                type="search"
                placeholder="Filter..."
                name="searchappointments"
                onChange={this.handleSearchArea}>
          </input>
        </div>

        {/* count all rows and display */}
        <div className="col-lg-3 mt-2 mb-2"><p style={{color:'green'}}>
          <b>Total number of Appointments: {this.state.appointments.length}</b></p>
        </div>   
      </div>

      <hr ></hr>
      <table  className="table table-striped"  >
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
                    
          </tr>
    
          </thead>
    
          <tbody>
              {this.state.appointments.map((appointments,index) =>(
              <tr>
                  <th style={{width:'50px'}}  scope = "row">{index+1} </th>
                      <td style={{width:'180px'}}> {appointments.firstName} {appointments.lastName}</td>
                      <td style={{width:'55px',textAlign:'center'}}> {appointments.age}</td>
                      <td style={{width:'70px',textAlign:'center'}}> {appointments.gender}</td>
                      <td style={{width:'110px',textAlign:'center'}}> {appointments.nic}</td>
                      <td style={{width:'160px',textAlign:'center'}}> +94{appointments.contact_no}</td>
                      <td style={{width:"190px"}}> {appointments.doctor}</td>
                      <td style={{width:'115px',textAlign:'center'}}> {appointments.date}</td>
                      <td style={{width:'110px', textAlign:'center'}} > {appointments.time}</td>
                </tr>
              
              ))}
            </tbody>
            </table>
            <br></br>    
       
    </div>

    </div>
  )
}
}


export class Example extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button className="btn btn-info" style={{ marginLeft:'85%',marginTop:'5px'}} onClick={handlePrint}><b>Generate PDF</b></button>

            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}