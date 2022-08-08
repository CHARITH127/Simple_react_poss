import React, {Component, Fragment} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import "./UserRegistrationStyle.css"
import Customer from "../../services/customer";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: "",
                username: "",
                password: "",
                name: {
                    firstname: "",
                    lastname: ""
                },
                address: {
                    city: "",
                    street: "",
                    number: 0,
                    zipcode: "",
                    geolocation: {
                        lat: "-37.3159",
                        long: "81.1496"
                    }
                },
                phone: ""
            },

            data: [],
            btnLabel:"Save"

        }
    }


    saveCustomer = async () => {
        let formData = this.state.formData

        if (this.state.btnLabel === "Save") {
            let response = await Customer.postCustomer(formData)
            if (response.status === 200) {
                alert("user saved")
            } else {
                alert("user doesn't save")
            }
        }else {
            /*update part*/
            console.log(this.state.rowId)
            let  response = await Customer.updateUsers(formData,this.state.rowId)
            if (response.status=== 200) {
                alert("customer updated")
                this.setState({
                    btnLabel:"Save"
                })
            }else {
                alert("customer update unsuccessfully")
            }
        }

    }


    loadData = async () => {
        let res = await Customer.getAllCustomers();
        if (res.status === 200) {
            this.setState({
                data: res.data
            })
        } else {
            alert("can't load")
        }
    }

    deleteCustomer = async (id) => {
        let response = await Customer.deleteUser(id)
        if (response.status === 200) {
            alert("customer successfully deleted")
        } else {
            alert("something went wrong")
        }
    }


    updateCustomer = (data) => {

        console.log(data)


        this.setState({
            formData: {
                email: data.email,
                username: data.username,
                password: data.password,
                name: {
                    firstname: data.name.firstname,
                    lastname: data.name.lastname
                },
                address: {
                    city: data.address.city,
                    street: data.address.street,
                    number: data.address.number,
                    zipcode: data.address.zipcode,
                    geolocation: {
                        lat: "-37.3159",
                        long: "81.1496"
                    }
                },
                phone: data.phone
            },

            btnLabel:"Update",
        })
    }

    clearAll = ()=>{
        this.setState({
            formData: {
                email: "",
                username:"",
                password: "",
                name: {
                    firstname: "",
                    lastname: ""
                },
                address: {
                    city:"",
                    street: "",
                    number: "",
                    zipcode: "",
                    geolocation: {
                        lat: "-37.3159",
                        long: "81.1496"
                    }
                },
                phone: ""
            },

            btnLabel:"Save",
        })
    }


    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <Fragment>
                <div className="Registration_context">
                    <div className="reg_container">
                        <div className="heading_container">
                            <h3>User Registration</h3>
                        </div>
                        <div className="user_input_container">
                            <div className="text_field_inputContainer-left">
                                <TextField className="reg_textFields"
                                           id="txt_reg_userFirstName"
                                           label="First Name"
                                           variant="outlined"
                                           value={this.state.formData.name.firstname}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.name.firstname = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <TextField className="reg_textFields"
                                           id="txt_reg_userEmail" label="Email" variant="outlined"
                                           value={this.state.formData.email}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.email = e.target.value
                                               this.setState({formData})
                                           }}

                                />
                                <TextField className="reg_textFields" id="txt_reg_userPassword" label="Password"
                                           variant="outlined"
                                           value={this.state.formData.password}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.password = e.target.value
                                               this.setState({formData})
                                           }}

                                />
                                <TextField className="reg_textFields" id="txt_reg_street" label="Street"
                                           variant="outlined"
                                           value={this.state.formData.address.street}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.address.street = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <TextField className="reg_textFields" id="txt_reg_zipCode" label="Zip code"
                                           variant="outlined"
                                           value={this.state.formData.address.zipcode}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.address.zipcode = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                            </div>
                            <div className="text_field_inputContainer-right">
                                <TextField className="reg_textFields" id="txt_reg_userLastName" label="Last Name"
                                           variant="outlined"
                                           value={this.state.formData.name.lastname}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.name.lastname = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <TextField className="reg_textFields" id="txt_reg_userName" label="User Name"
                                           variant="outlined"
                                           value={this.state.formData.username}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.username = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <TextField className="reg_textFields" id="txt_reg_city" label="City" variant="outlined"
                                           value={this.state.formData.address.city}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.address.city = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <TextField className="reg_textFields" id="txt_reg_streetNo" label="Street number"
                                           variant="outlined"
                                           value={this.state.formData.address.number}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.address.number = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <TextField className="reg_textFields" id="txt_reg_mobileNo" label="Mobile number"
                                           variant="outlined"
                                           value={this.state.formData.phone}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.phone = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                            </div>
                        </div>
                        <div className="button_container">
                            <div className="reg_clearbtnContainer">
                                <Button variant="outlined" onClick={()=>{this.clearAll()}}>Clear</Button>
                            </div>
                            <div>
                                <Button id="btnUser_registration" onClick={() => {
                                    this.saveCustomer()
                                }} variant="contained">Save</Button>
                            </div>
                        </div>
                        <div className="table_container">
                            <TableContainer component={Paper}>
                                <Table sx={{minWidth: 650}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>First Name</TableCell>
                                            <TableCell align="right">Last Name</TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">User Name</TableCell>
                                            <TableCell align="right">Password</TableCell>
                                            <TableCell align="right">City</TableCell>
                                            <TableCell align="right">Street</TableCell>
                                            <TableCell align="right">Street No</TableCell>
                                            <TableCell align="right">Zip Code</TableCell>
                                            <TableCell align="right">Mobile no</TableCell>
                                            <TableCell align="left">Options</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.data.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell>{row.name.firstname}</TableCell>
                                                <TableCell align="right">{row.name.lastname}</TableCell>
                                                <TableCell align="right">{row.email}</TableCell>
                                                <TableCell align="right">{row.username}</TableCell>
                                                <TableCell align="right">{row.password}</TableCell>
                                                <TableCell align="right">{row.address.city}</TableCell>
                                                <TableCell align="right">{row.address.street}</TableCell>
                                                <TableCell align="right">{row.address.number}</TableCell>
                                                <TableCell align="right">{row.address.zipcode}</TableCell>
                                                <TableCell align="right">{row.phone}</TableCell>
                                                <TableCell align="left">
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                console.log("edit icon clicked!")
                                                                this.setState({rowId:row.id})
                                                                this.updateCustomer(row);
                                                            }}
                                                        >
                                                            <EditIcon color="primary"/>
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                this.deleteCustomer(row.id)
                                                            }}
                                                        >
                                                            <DeleteIcon color="error"/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }

}

export default RegisterForm;