import React, {Component, Fragment} from "react";
import NavBar from "../../Components/NavBar/navBar";
import "./UserProfileStyle.css"

class UserProfile extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <div className="profile_container">
                    <div className="navBar_container">
                        <NavBar/>
                    </div>
                    <div className="profile_details_container">
                        <div className="box_container">
                            <div className="box_heading_container">
                                <h3>Products</h3>
                            </div>
                            <div className="box_count">
                                <h3>45</h3>
                            </div>
                        </div>
                        <div className="box_container">
                            <div className="box_heading_container">
                                <h3>Carts</h3>
                            </div>
                            <div className="box_count">
                                <h3>45</h3>
                            </div>
                        </div>
                        <div className="box_container">
                            <div className="box_heading_container">
                                <h3>Users</h3>
                            </div>
                            <div className="box_count">
                                <h3>45</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserProfile