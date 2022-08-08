import React, {Component, Fragment} from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./CartManagementStyle.css"
import customer from "../../services/customer";
import product from "../../services/product";
import cart from "../../services/cart";

class CartManage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                userId: 0,
                date: "",
                products: [
                    {
                        productId: 0,
                        quantity: 0
                    }
                ]
            },

            customerData: [],
            productData: []
        }
    }

    loadAllCustomer = async () => {
        let response = await customer.getAllCustomers();
        if (response.status === 200) {
            this.setState({
                customerData: response.data
            })
        }
    }

    loadAllProductsDetails = async () => {
        let response = await product.getAllProducts()
        if (response.status === 200) {
            this.setState({
                productData: response.data
            })
        }
    }

    saveCart = async ()=>{
        let response = await cart.saveCart();
        if (response.status === 200) {
            alert("product successfully saved")
        }else {
            alert("product saving unsuccessfull")
        }
    }





    componentDidMount() {
        this.loadAllCustomer();
        this.loadAllProductsDetails()
    }

    render() {
        return (
            <Fragment>
                <div className="cartManage_context">
                    <div className="cartManage_container">
                        <div className="heading_container">
                            <h3>Cart Manage</h3>
                        </div>
                        <div className="cartManage_input_container">
                            <div className="cartManage_input_container-left">
                                <Box sx={{maxWidth: "80%", marginBottom: '1.6rem'}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="cartManage_userName">User name</InputLabel>
                                        <Select
                                            labelId="cartManage_userName"
                                            id="cartManage_userNameSelect"
                                            label="Age"
                                            defaultValue=""
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.userId =e.target.value
                                            }}

                                        >
                                            {this.state.customerData.map((user => (
                                                <MenuItem key={user.id}
                                                          value={user.id}>{user.name.firstname + " " + user.name.lastname}</MenuItem>
                                            )))}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{maxWidth: "80%", marginBottom: '1.6rem'}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Product title</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="cartManage_productTitleSelect"
                                            label="Age"
                                            defaultValue=""
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.products.productId =e.target.value
                                            }}
                                        >
                                            {this.state.productData.map((product => (
                                                <MenuItem key={product.id}
                                                          value={product.id}>{product.title}</MenuItem>
                                            )))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="cartManage_input_container-right">
                                <TextField
                                    className="cartManage_textFields"
                                    id="date"
                                    label="Pick Up date"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{width: '90%', marginBottom: '3%'}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => {
                                        let formData = this.state.formData
                                        formData.date = e.target.value
                                        this.setState({formData})
                                    }}
                                />
                                <TextField className="cartManage_textFields" id="txt_cartManage_qty" label="Qty" variant="outlined"
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.products.quantity = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                            </div>
                        </div>
                        <div className="button_container">
                            <div className="productManage_clearbtnContainer">
                                <Button variant="outlined">Clear</Button>
                            </div>
                            <div>
                                <Button onClick={()=>{this.saveCart()}} id="btnUser_registration" variant="contained">Save</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CartManage