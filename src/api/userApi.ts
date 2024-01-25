import axios from "axios"



const URL: string = "http://localhost:4499/api"

export const registerUser = async (email: any) => {
try {
    return await axios.post(`${URL}/register`, { email }).then((res: any) =>{
        return res?.data
    });
} catch (error) {
    return error;
}
}

export const verifyUser = async (userId: string) => {
   try {
    return await axios.get(`${URL}/verify-user/${userId}`).then((res: any) =>{
        return res.data
       })
   } catch (error) {
    return error
   }
}