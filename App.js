

import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import useFetch from './src/hooks/useFetch';
import styles from './App.style'
import Button from './Button';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


export default function App() {
   const  [city,setCity] = useState('ankara')
  const [isFetch,setisFetch]  =useState(false)
  const [data,setData]  =useState(null)
  const [loading,setLoading] =useState(true)
  const [error,setError] =useState(null)
  const [city2,setCity2]  =useState(null)
  const  url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f342b04e38534ee9065b0c8d5e6fe18`
 const FetchData =async () =>{
  try {
    const {data}  = await axios.get(url)
    setData(data)
    setLoading(false)
  
  } catch (error) {
    setLoading(false)
    setError(true)
      Alert.alert('Veri Bulunamadı')
  }
 }
  console.log(data.weather[0].description.toUpperCase())
 
  function BringData(){
   FetchData()
  }
   
  console.log(data.weather)
  return (


    <View style={styles.container}>
     
      <View style  ={styles.header}>

   <TextInput  style = {styles.input}placeholder='Enter the City' value={city} onChangeText={setCity} />
   <Button style = {styles.button} title='FetchData'  onPress={BringData}/>
   {data ?( <View style = {styles.body}>
          <Text style = {styles.title}> WEATHER</Text>
         <View style = {styles.latBody}>

          <Text style = {styles.latText}>Latitude Coordinate: </Text>
          <Text style = {styles.lat}>{data.coord.lat}</Text>
         </View  >
         <View style ={styles.lonBody}>
         <Text style = {styles.lonText}>Lontitude Coordinate: </Text>
          <Text style = {styles.lon}>{data.coord.lon}</Text>
         </View>
         <View style = {styles.cityBody}>
            <Text style = {styles.cityText}>Coordinate Area: </Text>
            <Text style = {styles.city}>{data.name}</Text>
         </View>
         <View style = {styles.tempBody}>
          <Text style = {styles.tempText}>Temperature: </Text>
            <View style = {styles.tempFlex}>
            <Text style  ={styles.temp}>{Math.floor(data.main.temp-271)}</Text>
                <Icon name = 'temperature-celsius' size = {22} color='white'/>
            </View>

         </View>
         <Text style = {styles.description}>{data.weather[0].description.toUpperCase()}</Text>
      </View>):(
        null
      )}
     
      </View>
    </View>
  );
}

