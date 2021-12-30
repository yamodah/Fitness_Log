import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Page3 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Page4")}}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.goBack()}}>
              <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
          </View>
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
export default Page2


