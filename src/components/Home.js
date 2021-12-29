import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.secondaryBG}>
          <Text style={styles.text}>Yassine's Fitness Log</Text>
          <StatusBar style="light" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Wokrout Log</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add Wokrout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2b2d42",
      alignItems: "center",
      justifyContent: "center",
    },
    secondaryBG: {
      width: "85%",
      flex: 1,
      // backgroundColor: "black",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderRadius: 30,
    },
    text: {
      color: "#edf2f4",
      fontSize: 20,
    },
    button: {
      backgroundColor: "#8d99ae",
      borderRadius: 25,
      padding: 10,
      margin:15
    },
    buttonText: {
      color: "#edf2f4",
    },
    buttonContainer:{
     flexDirection:"row",
    //  backgroundColor:"white"
    }
  })
export default Home
