import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Page1 = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text>General info input page (buttons just for demo will only be a cancel and next button)</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Page2")}}>
              <Text style={styles.buttonText}>Page2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Page3")}}>
              <Text style={styles.buttonText}>Page3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Page4")}}>
              <Text style={styles.buttonText}>Page4</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.goBack()}}>
              <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
        </View>
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
export default Page1


