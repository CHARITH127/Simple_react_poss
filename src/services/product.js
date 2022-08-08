import axios from "../axios";

class Product {
    getAllProductsCategories = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/categories')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })

        return await promise
    }

    saveProduct = async (data) =>{
        const  promise = new Promise((resolve, reject) => {
            axios.post('products',data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })

        return await promise;
    }

    getAllProducts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })

        return await promise
    }

}

export default new Product();