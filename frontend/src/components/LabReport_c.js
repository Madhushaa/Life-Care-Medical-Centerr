import React from "react";
import ReactToPrint from "react-to-print";
import axios from 'axios';

class LabReport_c extends React.Component {

    //count each lab tests
    countType(labTest) {
        const countTypes = this.state.labs.filter(labs => labs.labTest === labTest);
        return countTypes.length;
    }

    constructor(props){
        super(props);
    
        this.state={
            labs:[]
        };
    }
    
    
    componentDidMount(){
        this.retrieveLabs();
    }
    
    
    //retrive all lab test details
    retrieveLabs(){
        axios.get("http://localhost:8070/labs").then(res=>{
            if(res.data.success){
                this.setState({
                    labs:res.data.existingLabs
                });
    
                console.log(this.state.labs);
            }
        })
    }

    

    render(){
        return(
          
            <div> 
                <br></br><br></br>
                <h1 align="center">Laboratory Tests Details Report</h1>
                <br></br>
                <br></br>
                <table className="table table-striped">
                    <thead>
                        <tr class="table-primary">
                            <th scope='col'>Patient Name</th>
                            <th scope='col'>Patient ID</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Gender</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Laboratory Test</th>
                            <th scope='col'>Laboratory No</th>
                            <th scope='col'>Laboratory Technologist</th>
                            <th scope='col'>Status</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.labs.map((labs,index) => (

                            <tr>
                                     <td>
                                        <a href={'/lab/${labs._id}'} style={{textDecoration:'none',color:'black'}}>
                                        {labs.name}
                                        </a>
                                    </td>
                                    <td>{labs.id} </td>
                                    <td>{labs.age} </td>
                                    <td>{labs.gender} </td>
                                    <td>{labs.date.toString().substr(0 ,10)}</td>
                                    <td>{labs.labTest} </td>
                                    <td>{labs.labNo} </td>
                                    <td>{labs.technologist} </td>
                                    <td>{labs.status} </td>     
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
                <br></br>
                    <h5><u><b>  &nbsp; Number of tests for each lab test </b></u></h5>
                <br></br>
                <table className="table table-striped" style={{backgroundColor:'#b9cded',width:'400px'}}>
                    <thead>
                        <tr>
                            <th>Lab Test Name</th>
                            <th>Number of Tests</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Blood Suger</td>
                        <td>{this.countType('Blood Suger')}</td>
                    </tr>
                    <tr>
                        <td>Covid-19 PCR</td>
                        <td>{this.countType('Covid-19 PCR')}</td>
                    </tr>
                    <tr>
                        <td>Covid-19 Antigen</td>
                        <td>{this.countType('Covid-19 Antigen')}</td>
                    </tr>
                 <tr>
                    <td>Dengue Antigen</td>
                    <td>{this.countType('Dengue Antigen')}</td>
                 </tr>

                 <tr>
                    <td>Full Blood Count</td>
                    <td>{this.countType('Full Blood Count')}</td>
                 </tr>

            </table>

            <br></br>
                <h5 style={{ color: 'red' }}> &nbsp;Total number of Lab Tests: {this.state.labs.length}</h5>
            <br></br>

            </div>
        )
    }

}

class PrintPDF extends React.Component {
    render() {
      return (
        <div>
            <br></br>
            <br></br>
          <ReactToPrint
            trigger={() => <button className='btn btn-primary' style={{marginLeft:'85%',marginTop:'5px'}}>Generate Report</button>}
            content={() => this.componentRef}/>
          <LabReport_c ref={(el) => (this.componentRef = el)} />
        </div>
      );
    }
  }
  
  export default PrintPDF;