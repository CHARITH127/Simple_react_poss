import React, {Component, Fragment} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import localStorageService from "../../services/localStorageService";
import jwtDecode from "jwt-decode";

class NavBar extends Component{
    constructor(props) {
        super(props);

        this.state={
            userName:""
        }
    }

    loadUserName = async () => {
        const accessToken = await localStorageService.getItem("accessToken");
        const decoded = jwtDecode(accessToken)
        this.setState({userName:decoded.user})
    }

    componentDidMount() {
        this.loadUserName();
    }

    render() {
        return(
            <Fragment>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar style={{backgroundColor:'#edbb91'}}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Link style={{textDecoration:"none",color:"inherit"}} to={'/pro'}><Button color="inherit">Dashboard</Button></Link>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow:1}}>
                                <Link style={{textDecoration:"none",color:"inherit"}} to={'/cartManage'}><Button color="inherit">Cart</Button></Link>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow:16}} >
                                <Link style={{textDecoration:"none",color:"inherit"}} to={'/proManage'}><Button color="inherit">Product</Button></Link>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow:0}}>
                                {this.state.userName}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Fragment>
        )
    }
}

export default NavBar