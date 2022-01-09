import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'


const Page1 = ({navigation, route}) => {
  const [date, setDate]=useState(new Map())
  const [type, setType]=useState(new Map())
  const [duration, setdDuration]=useState(new Map())
  const [goal, setGoal]=useState(new Map())
  const {dataPack} = route.params
  const changeHanlder = (setMethod,value)=>{
    setMethod(value)
  }
  const submitHandler = ()=>{
    dataPack.setData({
      date, type, duration, goal, ...dataPack.data
    })
  }
    return (
        <View style={styles.container}>
          <Text>General info input page </Text>
          <View>

          </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} 
              onPress={()=>{
              submitHandler()
              navigation.navigate("Page2")
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Home",{...dataPack})}}>
              <Text style={styles.buttonText}>cancel</Text>
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
export default Page1


