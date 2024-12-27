import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-protal-server-ten.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate();

    useEffect( ()=>{
        axiosInstance.interceptors.response.use( response =>{
            return response
        } , error=>{
            // console.log("Interceptors Error: ",error);

            if(error.status === 401 || error.status ===403){
                signOutUser()
                .then(()=>{
                    // console.log("logged Out User");
                    navigate('/login')
                })
                .catch(error=> {
                    // console.log(error)
                })
            }

            return Promise.reject(error)

        } )
    })


  return axiosInstance;
};

export default useAxiosSecure;



/**
 * 
 * axios: get,post,put/patch,delete ---> easier
 * interceptor: 
 * client -----------------|--------------------> server
 * client <-----------------|-------------------- server
 * in the interceptor for response = needs two function
 * 
 * 
 */