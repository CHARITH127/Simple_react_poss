import React, {Component, Fragment} from "react";
import loginImage from "../../assests/login_image.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import '../login/loginStyleSheet.css'
import Login from "../../services/Login";
import localStorageService from "../../services/localStorageService";

class LoginVerifing extends Component{
    constructor(props) {
        super(props);


        this.state={
            formData:{
                username: "",
                password: ""
            }
        }

    }


    checkLoginVerification = async ()=>{
        let fromDate = this.state.formData
        let res = await Login.loginVerify(fromDate)
        if (res.status === 200) {
            localStorageService.setItem("accessToken",res.data.token)
            window.open("/pro","_self")

        }else {
            alert("login decline")
        }
    }

    render() {
        return(
            <Fragment>
                <div className="login_context">
                    <div className="login_form_container">
                        <div className="headingContainer">
                        </div>
                        <div className="login_content_container">
                            <div className="img_container">
                                <img width={'100%'} height={'100%'} src={loginImage} alt="login_image"/>
                            </div>
                            <div className="details_container">
                                <h3>Login Form</h3>
                                <TextField
                                    className="user_inputs"
                                    id="cust_userName"
                                    label="User Name"
                                    variant="outlined"
                                    value={this.state.username}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.username = e.target.value
                                        this.setState({formData})
                                    }}
                                />
                                <TextField className="user_inputs"
                                           id="cust_userPassword"
                                           label="Password"
                                           type="password"
                                           autoComplete="current-password"
                                           value={this.state.password}
                                           onChange={(e)=>{
                                               let formData = this.state.formData
                                               formData.password = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <Button onClick={()=>{this.checkLoginVerification()}}  className="login_button" id="btnUser_login"
                                        variant="contained">Login</Button>
                                <p className="loginText">Create new user account ? <Link style={{textDecoration: "none"}}
                                                                                         to='/reg'><span>Click here</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LoginVerifing