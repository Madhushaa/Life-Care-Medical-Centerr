import React, { Component } from 'react';
import axios from 'axios';

export default class paymentView_h extends Component{
    constructor(props){
        super(props);

        this.state={
            payments:[]
        };
    }

//function to retrive  all payment details from database
    componentDidMount(){
        axios.get("http://localhost:8070/viewpayment").then(res=>{
            if(res.data.success){
                this.setState({
                    payments:res.data.existingPosts
                });

                console.log(this.state.payments);
            }
        });
    }


//Delete a payment detail method
    onDelete =(id) =>{
        axios.delete(`http://localhost:8070/paydelete/${id}`).then((res)=>{
            alert("Deleted Payment Details Succesfully !!");
            this.componentDidMount();
        })
   }


 //searching section

   filterData(payments,searchKey){

    const result = payments.filter((payments)=>
       
         payments.appoinmentType.toLowerCase().includes(searchKey)
    )
    this.setState({payments:result})
   }
   
   handleSearchArea =(e) =>{

    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8070/viewpayment")
        .then(Response =>{
            if(Response.data.success){
            this.filterData(Response.data.existingPosts,searchKey)
            }
            
        });

   }

  render(){
     return(
         <div>
             <h1 style={{textAlign:"center" ,marginBottom:40}}> <b>Payment Details</b> </h1>


             <input type="search" className="myInput" 
                placeholder="Search Appointment Types...." 
                title="Type in a name"
                onChange={this.handleSearchArea}
                /><br/><br/>

                <hr></hr>

             <table className="table table-striped">
                 <thead>
                    <tr className="table-primary">
                        <th scope="col">Payment ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Appointment Type</th>
                        <th scope="col">Doctor Specialization</th>
                        <th scope="col">Labtest Name</th>
                        <th style={{width:100 , textAlign:'center'}} scope="col">Amount (LKR)</th>
                        <th scope="col">Date</th>
                        <th style={{textAlign:'center'}}  scope="col"> Action </th>
                    </tr>
                 </thead>
                  <tbody>
                      {this.state.payments.map((payments,index)=>
                      <tr>
                          <th scope="row" style={{width:150}}>{index+1}</th>
                          <td>{payments.pname}</td>
                          <td>{payments.phone}</td>
                          <td  style={{width:200}}>{payments.appoinmentType}</td>
                          <td>{payments.doctorSpecial}</td>
                          <td  style={{width:200}}>{payments.labtestName}</td>
                          <td>{payments.pamount}</td>
                          <td  style={{width:200}}>{payments.pdate}</td>
                          <td style={{width:500}}>
                              <a className="btn btn-warning" href={`/payUpdate/${payments._id}`}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              &nbsp;
                              <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(payments._id)}>
                                  <i className="far fa-trash-alt" ></i>&nbsp;Delete
                              </a>
                          </td>

                      </tr>
                      )}
                  </tbody>
             </table>
             <br></br>
              


         </div>
        )
    }
}