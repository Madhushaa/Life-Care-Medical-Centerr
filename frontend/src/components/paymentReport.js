import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import axios from 'axios';

class ComponentToPrint extends Component{

//Count Number of received payments for each Appointment types
    countType(appoinmentType) {
        const countTypes = this.state.payments.filter(payments => payments.appoinmentType === appoinmentType);
        return countTypes.length;
    }

    constructor(props){
        super(props);

        this.state={
            payments:[]
        };
    }

//Payment Retrieve methods
    componentDidMount(){
        this.retrievePayments();
    }

    retrievePayments(){
        axios.get("http://localhost:8070/viewpayment").then(res=>{
            if(res.data.success){
                this.setState({
                    payments:res.data.existingPosts
                });

                console.log(this.state.payments);
            }
        });
    }


  



    render(){
        return(
            <div className='container' >
            <div>
             <h1 style={{textAlign:"center" ,marginBottom:40}}> <b>Payment Details</b> </h1>
                 <br></br>
                <hr></hr>
                <br></br>

             <table className="table table-striped">
                 <thead>
                    <tr className="table-primary">
                        <th style={{width:120}} scope="col">Payment ID </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Appointment Type</th>
                        <th style={{width:150}} scope="col">Doctor Specialization</th>
                        <th scope="col">Labtest Name</th>
                        <th scope="col">Amount(LKR)</th>
                        <th scope="col">Date</th>
                       
                    </tr>
                 </thead>
                  <tbody>
                      {this.state.payments.map((payments,index)=>
                      <tr>
                          <th scope="row" >{index+1}</th>
                          <td>{payments.pname}</td>
                          <td>{payments.phone}</td>
                          <td>{payments.appoinmentType}</td>
                          <td>{payments.doctorSpecial}</td>
                          <td>{payments.labtestName}</td>
                          <td>{payments.pamount}</td>
                          <td style={{width:100}}>{payments.pdate}</td>
                         

                      </tr>
                      )}
                  </tbody>
             </table>
             
             <br></br>
             <hr></hr>
             <br></br><br></br>

             <h4 style={{color:"red" , marginLeft:20}}>Total Number of Received Lab Test Payments In Medical Center : {this.countType('Lab Tests')}</h4><br></br>
             <h4 style={{color:"red" , marginLeft:20}}>Total Number of Received Doctor Chanelling Payments In Medical Center : {this.countType('Doctor Chanelling')}</h4><br></br>
             <h4 style={{color:"red" , marginLeft:20}}>Total Number of Received Lab Test and Doctor Chanelling Payments In Medical Center : {this.countType('Both(Doctor Chanelling and Lab Tests)')}</h4><br></br>
             

                <br></br>
                <br></br>
                <hr></hr>
                <br></br>

            </div>
            </div>
        )
    }
}

class ExamplePayment extends React.Component {
    render() {
      return (
        <div>
            
            
  
          <ReactToPrint
            trigger={() => <button  className= "btn btn-success" style={{marginLeft:1000,marginTop:0 ,paddingLeft:30,paddingRight:30,fontSize:20 }}> Generate Report </button>}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      );
    }
  }
  
  export default ExamplePayment;