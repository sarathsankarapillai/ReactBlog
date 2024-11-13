import { useState,useEffect } from "react";
const useFetch = (url) => {

  const [dataa,setDataa]=useState(null);
  const [Ispending,setIspedning]=useState(true);
  const [error,setError]=useState(null); 

    useEffect(()=>{
        setTimeout(() =>{
          fetch(url)
        .then(res=>{
          if(!res.ok){
            throw Error('could not fetch data for that resouce')
          }
          return res.json();
        })
        .then((data)=>{
         
          setDataa(data);
          setIspedning(false);
          setError(null);
        })
        .catch(err=>{
          setIspedning(false);
          setError(err.message);  
        })
        },1000);  
      },[url]);
      return{dataa,Ispending,error};


    
}
export default useFetch;