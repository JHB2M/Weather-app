import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
   
  },
  header:{
    marginTop:20,
  },
  input:{

    borderRadius:7,
    fontSize:20,
    margin:10,
    width:380,
    borderWidth:1,
    backgroundColor:'white',
    padding:10,
  },
  button:{
    flex:1,
    width:350,

  },
  body:{
    alignItems:'center',
  },
  latBody:{
    margin:8,
    flexDirection:"row",
  },
  lonBody:{
    margin:8,
    flexDirection:'row',
  },
  cityBody:{
    margin:8,
    flexDirection:'row',
  },
  tempBody:{
    margin:8,
    flexDirection:'row',
  },
  title:{
    color:'tomato',
    fontSize:30,
    fontWeight:'bold',
  },
  latText:{
    color:'tomato',
    fontSize:19,
    fontWeight:'bold',
  },
  lat:{
    color:'white',
    fontSize:21,
    fontWeight:'bold',
  },
  lonText:{
    color:'tomato',
    fontSize:19,
    fontWeight:'bold',
  },
  lon:{
    color:'white',
    fontSize:21,
    fontWeight:'bold',
  },
  cityText:{
    color:'tomato',
    fontSize:19,
    fontWeight:'bold',
  },
  city:{
    color:'white',
    fontSize:21,
    fontWeight:'bold',
  },
  tempText:{
    color:'tomato',
    fontSize:19,
    fontWeight:'bold',
  },
  temp:{
    color:'white',
    fontSize:21,
    fontWeight:'bold',
  },
  description:{
    fontSize:21,
    fontWeight:'bold',
    color:'white',
  },
  tempFlex:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  }
})