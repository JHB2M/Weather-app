import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
export default function useFetch(city){

  const  url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f342b04e38534ee9065b0c8d5e6fe18`
  const [data,setData]  =useState(null)
  const [loading,setLoading] =useState(true)
  const [error,setError] =useState(null)
  const FetchData = async ()=>{  
  try {
    const {data} = await axios.get(url)
    setData(data)
    setLoading(false)
  } catch (error) {
    setLoading(false)
    setError(true)
      Alert.alert('Veri alınırken bir hata olustu')
  }
}
useEffect(()=>{
  FetchData()
 
},[])
  return {data,loading,error}
}