import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class ViewStaff extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            staff: []
        }
    }
    componentDidMount() {
        console.log("Pr : "+this.props[0]);
        axios.get("http://localhost:8070/staff/view")
            .then(Response => {
                this.setState({ staff: Response.data })

                console.log("ID ID")
            }).catch(function (err) {
                console.log(err);
            })
    }

    //Dlete implementation
    onCancel = e => {
        axios.delete(`http://localhost:8070/staff/delete/${e}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            alert("Successfully Deleted")

            window.location.reload();
        })
    }

    deleteRow(e) {
        if (window.confirm('Are you sure want to delete?')) this.onCancel(e); 
        
    }
    
    //search implementation
    searchStaff(sName){
        var input, filter, table, tr, td, i, txtValue,td2,txtValue2;
        // console.log(sName)
        table=document.getElementById("stable");
        tr=table.getElementsByTagName("tr");
        filter=sName.toUpperCase();


        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            td2=tr[i].getElementsByTagName("td")[1];

            if (td || td2) {
              txtValue = td.textContent || td.innerText;
              txtValue2 = td2.textContent || td2.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else if (txtValue2.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
              }
              else {
                tr[i].style.display = "none";
              }
            }   
             
          }
    }


    render() {
        console.log("ViewBody");
        return (

            <div className=""style={{marginRight:5}}>

                
                <h2 align="center"><b>Staff List</b></h2>
                <br></br>
                <input class="form-control mr-sm-2 searchbar" type="text" placeholder="Search By Name" aria-label="Search" onChange={(e)=>{this.searchStaff(e.target.value)}}style={{marginLeft:3}}/>
               <hr style={{ width:1295}}></hr>
                <table className="table table-striped" id="stable" style={{ marginTop: 20,marginLeft:3}}>
                
                    <thead>
                        <tr class='table-primary'>
                            <th style={{ width:100}} scope="col">First Name</th>
                            <th scope="col"> Last Name</th>
                            <th scope="col">Address</th>
                            <th style={{ width:150}} scope="col">Contact Number</th>
                            <th scope="col">NIC Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Role</th>
                            <th scope="col">Specialization</th>
                            <th scope="col">Action</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.staff.map(staffmem => (  

                            <tr>
                                <td scope="row">{staffmem.firstName}</td>
                                <td scope="row"><div>{staffmem.lasttName}</div></td>
                                <td scope="row"><div>{staffmem.address}</div></td>
                                <td scope="row"><div>{staffmem.contactNumber}</div></td>
                                <td scope="row"><div>{staffmem.nicNumber}</div></td>
                                <td scope="row"><div>{staffmem.email}</div></td>
                                <td scope="row"><div style={{ width:100}}>{staffmem.dateOfBirth}</div></td>
                                <td scope="row"><div>{staffmem.gender}</div></td>
                                <td scope="row"><div>{staffmem.role}</div></td>
                                <td scope="row"><div>{staffmem.specialization}</div></td>

                                <td scope="row"><Link to={"/update/"+staffmem._id} className="btn btn-warning far fa-edit">&nbsp;Edit</Link> </td>

                                <td scope="row"><button className="btn btn-danger far fa-trash-alt" onClick={(e) => this.deleteRow(staffmem._id)}>&nbsp;Delete</button> </td>
                                

                                







                            </tr>

                        ))}
                    </tbody>
                </table>

                <br></br> <br></br>
            </div>

        )

    }
}