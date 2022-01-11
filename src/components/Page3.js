import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { useData } from './GlobalContext'
const Page3 = ({navigation}) => {
  const [pain, setPain]=useState("")
  const [performance,setPerformance] = useState("")
  const dataPack = useData()
  const changeHandler = (setMethod, value) => {
    setMethod(value);
  };
  const collectData = ()=>{
    dataPack.setData({
      pain,performance,
      ...dataPack.data
    })
    navigation.navigate("Page4",dataPack.data.type)
  }
    return (
        <View style={styles.container}>
          <View style={styles.largeTextBoxContainer}>
            <Text style={styles.inputLabel}>Pain(s):</Text>
            <TextInput
            style={{maxWidth:155, padding:5}}
              keyboardType="default"
              onChange={({ nativeEvent }) =>
                changeHandler(setPain, nativeEvent.text)
              }
              placeholder="general fitness"
              maxLength={140}
              returnKeyType="return"
              value={pain}
              multiline
            />
          </View>
          <View >
            <Text style={styles.inputLabel}>Performance:</Text>
            <TextInput
            style={{maxWidth:155, padding:5}}
              keyboardType="default"
              onChange={({ nativeEvent }) =>
                changeHandler(setPerformance, nativeEvent.text)
              }
              placeholder="general fitness"
              maxLength={140}
              returnKeyType="return"
              value={performance}
              multiline
            />
          </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={collectData}>
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
    },
    largeTextBoxContainer:{
      height:250,
      width:250,
      backgroundColor:"#edf2f4",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    },
    inputLabel:{
      marginRight:10,
      color:"#d90429",
      fontSize:15,
      // alignSelf:"center"
    }
  })
export default Page3


