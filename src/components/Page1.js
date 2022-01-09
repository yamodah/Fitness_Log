import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const Page1 = ({navigation, route}) => {
  const [date, setDate]=useState(new Date())
  const [type, setType]=useState("")
  const [duration, setDuration]=useState(0)
  const [goal, setGoal]=useState("")
  const {data, setData} = route.params
  const changeHanlder = (setMethod,value)=>{
    setMethod(value)
  }
  const submitHandler = ()=>{
   setData({
      date, type, duration, goal, ...data
    })
    console.log("submitting")
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
              navigation.navigate("Page2",{data,setData})
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Home")}}>
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


