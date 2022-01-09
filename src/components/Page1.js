import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const Page1 = ({navigation}) => {
  const currentDate = new Date()
  const [date, setDate]=useState(currentDate)
  const [type, setType]=useState("")
  const [duration, setDuration]=useState(0)
  const [goal, setGoal]=useState("")
  const changeHanlder = (setMethod,value)=>{
    setMethod(value)
    console.log(value)
  }
  const dateChange = (event,value)=>{
    setDate(value)
     console.log(value)
  }
    return (
        <View style={styles.container}>
          <View style={styles.dateContainer}>
            <Text style={styles.labelText}>Date:</Text>
          <DateTimePicker
          style={{width:160}}
          value={date}
          mode="date"
          display="compact"
          onChange={dateChange}
          themeVariant="dark"
        /></View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} 
              onPress={()=>{
                navigation.navigate("Page2",{ 
                data:{
                date,type,duration,goal
                 }})
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
      justifyContent: "space-around",
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
     justifyContent:"center",
     alignItems:"center"
    
    //  backgroundColor:"white"
    },
    dateContainer:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:250,
      color:"#edf2f4"
    },
    labelText:{
      color:"#edf2f4",
      fontSize:23,

    }
  })
export default Page1


