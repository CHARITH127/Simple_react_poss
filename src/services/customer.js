import axios from "../axios";

class Customer {
    postCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('users', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })

        return await promise;
    }


    getAllCustomers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })

        return await promise
    }

    deleteUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('users/'+data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise
    }

    updateUsers = async (data,id) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('users/'+id,data)
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

export default new Customer();