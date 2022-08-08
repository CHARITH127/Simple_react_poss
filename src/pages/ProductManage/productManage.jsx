import React, {Component, Fragment} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ProductManagementStyle.css"
import Product from "../../services/product";

class ProductManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                title: "",
                price: 0.0,
                description: "",
                image: "",
                category: ""
            },

            productCategories: []
        }
    }

    loadAllCategories = async () => {
        let res = await Product.getAllProductsCategories();
        if (res.status === 200) {
            this.setState({
                productCategories: res.data
            })
        }
    }


    saveProduct = async () =>{
        let formData = this.state.formData
        let response = await Product.saveProduct(formData)
        if (response.status=== 200) {
            alert("product successfully saved")
            this.clearAll();
        }else {
            alert("product save unsuccessfully")
        }
    }

    componentDidMount() {
        this.loadAllCategories();
    }

    clearAll = ()=>{
        this.setState(
            {
                formData: {
                    title: "",
                    price: 0.0,
                    description: "",
                    image: "",
                    category: ""
                },

                productCategories: []
            }
        )
    }

    render() {
        return (
            <Fragment>
                <div className="ProManagement_context">
                    <div className="productManage_container">
                        <div className="heading_container">
                            <h3>Product Manage</h3>
                        </div>
                        <div className="productManage_input_container">
                            <div className="productManage_inputContainer_left">
                                <TextField className="productManage_textFields" id="txt_prodManage_title" label="Title" variant="outlined"
                                           value={this.state.formData.title}
                                           onChange={(e)=>{
                                               let formData = this.state.formData
                                               formData.title = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <Box sx={{maxWidth: "80%"}}>
                                    <Autocomplete
                                        style={{width: "100%"}}
                                        disablePortal
                                        id="combo-box-demo"
                                        options={this.state.productCategories}
                                        sx={{width: 300}}
                                        onChange={(e,value)=>{
                                            console.log(value)
                                            let formData = this.state.formData
                                            formData.category = value
                                            this.setState({formData})
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Category"/>}
                                    />
                                </Box>
                                {/*uplaod button*/}
                                <Stack className="reg_textFields" style={{marginTop: '0.8rem'}} direction="row"
                                       alignItems="center" spacing={2}>
                                    <Button variant="contained" component="label">
                                        Upload
                                        <input hidden accept="image/*" multiple type="file"
                                               onChange={(e)=>{
                                                   let formData = this.state.formData
                                                   formData.image = e.target.value
                                                   this.setState({formData})
                                               }}/>
                                    </Button>
                                </Stack>
                            </div>
                            <div className="productManage_inputContainer_right">
                                <TextField className="productManage_textFields" id="txt_prodManage_price" label="Price" variant="outlined"
                                           value={this.state.formData.price}
                                           onChange={(e)=>{
                                               let formData = this.state.formData
                                               formData.price = e.target.value
                                               this.setState({formData})
                                           }}
                                />
                                <TextField
                                    className="productManage_textFields"
                                    id="txt_prodManage_description"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    value={this.state.formData.description}
                                    onChange={(e)=>{
                                        let formData = this.state.formData
                                        formData.description = e.target.value
                                        this.setState({formData})
                                    }}
                                />
                            </div>
                        </div>
                        <div className="button_container">
                            <div className="cartManage_clearbtnContainer">
                                <Button onClick={()=>{this.clearAll()}} variant="outlined">Clear</Button>
                            </div>
                            <div>
                                <Button onClick={()=>{this.saveProduct()}} id="btnUser_registration" variant="contained">Save</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProductManage