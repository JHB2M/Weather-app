import { TouchableOpacity, Text, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
export default function Button({onPress}) {
  return (
    <TouchableOpacity style={styles.container}onPress ={onPress}>
      <Text style={styles.temp}>Get Temp</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius:7,
    marginLeft:10,
    width:380,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "tomato",
  },
  temp: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
