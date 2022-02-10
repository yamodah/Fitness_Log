import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.secondaryBG}>
        <View style={{width:"55%", justifyContent:"center", alignItems:"center", height:100, backgroundColor:"#101119", padding:15,paddingBottom:20, borderRadius:10, borderColor:"white", borderWidth:1}}>
          <Text style={styles.text}>Fitness Log</Text>
        </View>
          <StatusBar style="light" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Logs")}}>
              <Text style={styles.buttonText}>Activity Logs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAdd} onPress={()=>{navigation.navigate("Page1")}}>
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
      fontSize: 30,
      textAlign:"center"
    },
    button: {
      backgroundColor: "#8F8CAD",
      borderRadius: 10,
      padding: 10,
      margin: 15,
      // width:115,
      borderColor:"white",
      borderWidth:1
      
    },
    buttonAdd: {
      backgroundColor: "#8CAD8E",
      borderRadius: 10,
      padding: 10,
      margin: 15,
      // width:115,
      borderColor:"white",
      borderWidth:1
      
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
