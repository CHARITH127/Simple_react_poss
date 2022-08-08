import axios from "../axios";

class Cart{
    saveCart = async (data) => {
        const  promise = new Promise((resolve, reject) => {
            axios.post('carts',data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })

        return await promise;
    }
}

export default new Cart();