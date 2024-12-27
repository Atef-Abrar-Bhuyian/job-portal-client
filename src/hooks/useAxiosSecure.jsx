import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate();

    useEffect( ()=>{
        axiosInstance.interceptors.response.use( response =>{
            return response
        } , error=>{
            console.log("Interceptors Error: ",error);

            if(error.status === 401 || error.status ===403){
                signOutUser()
                .then(()=>{
                    console.log("logged Out User");
                    navigate('/login')
                })
                .catch(error=> console.log(error))
            }

            return Promise.reject(error)

        } )
    })


  return axiosInstance;
};

export default useAxiosSecure;
