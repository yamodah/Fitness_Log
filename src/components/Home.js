import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";

const Home = ({navigation}) => {
  const 
  const [exerciseData,setExerciseData]=useState(new Map())
  const dataPack = {data:exerciseData,setData:setExerciseData}
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.secondaryBG}>
          <Text style={styles.text}>Fitness Log</Text>
          <StatusBar style="light" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Logs")}}>
              <Text style={styles.buttonText}>Activity Log</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Page1",dataPack)}}>
              <Text style={styles.buttonText}>Add Activity</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d90429",
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
      fontSize: 50,
      textAlign:"center"
    },
    button: {
    //   backgroundColor: "#edf2f499",
      borderRadius: 10,
      padding: 10,
      margin:15,
    //   width:145,
      
    },
    buttonText: {
      color: "#edf2f4",
      textAlign:"center",
      fontSize:24
    },
    buttonContainer:{
     flexDirection:"row",
    
    //  backgroundColor:"white"
    }
  })
export default Home
