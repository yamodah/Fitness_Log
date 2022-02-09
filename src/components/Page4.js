import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Keyboard,TouchableWithoutFeedback } from 'react-native'
import { useData } from "./GlobalContext";
import Cardio from './typeElements/Cardio';
import Sports from './typeElements/Sports';
import Resistance from './typeElements/Resistance';
const Page4 = ({navigation,route}) => {
  const [bodyParts, setBodyParts]=useState(new Set())
  const [sport, setSport]=useState("")
  const [venue, setVenue]=useState("")
  const [competition, setCompetition]=useState(false)
  const [cardio_type, setCardio_type]=useState("")
  const [distance, setDistance]=useState(0)
  const [speed, setSpeed]=useState(0)
  const [show,setShow]=useState(false)
  const {type}= route.params
  const dataPack = useData();

  const changeHandler = (setMethod, value) => {
    setMethod(value);
  };
  console.log(dataPack.data)
  const collectData = ()=>{
    dataPack.setData({
      
      ...dataPack.data
    }).then((data)=>console.log(data))
    navigation.navigate("Page4",dataPack.data.type)
  }
    return (
        <View style={styles.container}>
          {type==="Cardio" && <Cardio navigation={navigation}/>}
          {type==="Sports" && <Sports navigation={navigation}/>}
          {type==="resistance" && <Resistance navigation={navigation}/>}
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
export default Page4


