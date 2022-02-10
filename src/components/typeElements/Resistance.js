import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import React, {useState} from 'react';
import SelectMultipleGroupButton from 'react-native-selectmultiple-button/libraries/SelectMultipleGroupButton';
import { useData } from "../GlobalContext";

const Resistance = ({navigation, modalToggle}) => {
  const [bodyParts, setBodyParts] = useState([])
  const dataPack = useData();
  const ios_blue = "#007AFF";

  const bodyPartOptions = [
    {value:"Full-Body"},
    {value:"Core"},
    {value:"Biceps"},
    {value:"Triceps"},
    {value:"Chest"},
    {value:"Shoulders"},
    {value:"Quads"},
    {value:"Glute"},
    {value:"Calves"},
    {value:"Hamstrings"},
    {value:"Upper-Back"},
    {value:"Lower-Back"},
  ]
  const collectData = ()=>{
    new Promise((resolve,reject)=>{
      dataPack.setData({
        ...dataPack.data,
        body_parts:bodyParts.join(", ")
      })
      resolve()
    }).then(()=>{
      modalToggle(true)
    })
    // navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text style={{color:"white", fontSize:20}}>I worked out: </Text>
      <View style={{minWidth:"85%", backgroundColor:"#27293C", padding:15, borderRadius:10, borderColor:"white", borderWidth:1, maxWidth:"85%"}}>
      <Text style={{textAlign:"center", color:"white"}}> {bodyParts.join(",  ")}</Text>
      </View>
      <View style={styles.largeTextBoxContainer}>
      <SelectMultipleGroupButton
      group={bodyPartOptions}
      containerViewStyle={{
        justifyContent: "center",
        width:275,
        padding:10,
        backgroundColor:"white",
        borderRadius:10,
        borderWidth:5,
        borderColor:"#8D99AE"

      }}
      highLightStyle={{
        borderColor: "gray",
        backgroundColor: "transparent",
        textColor: "#27293C",
        borderTintColor: "#27293C",
        backgroundTintColor: "#EF233C",
        textTintColor: "white",
        borderWidth:1

          }}
      onSelectedValuesChange={(selectedValues)=>{
        setBodyParts([
          ...selectedValues
        ])
      }}
      />
      </View>
       <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={collectData}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Resistance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2d42",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop:50,
    paddingBottom:150
  },
  button: {
    backgroundColor: "#8CAD8E",
  borderRadius: 10,
  padding: 10,
  margin: 15,
    width:115,
    borderColor:"white",
  borderWidth:1
},
buttonCancel: {
    backgroundColor: "#EF233C",
  borderRadius: 10,
  padding: 10,
  margin: 15,
    width:115,
    borderColor:"white",
  borderWidth:1
},
  buttonText: {
    color: "#edf2f4",
    textAlign: "center",
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    // marginBottom:50
    //  backgroundColor:"white"
  },
  largeTextBoxContainer: {
    maxHeight: "65%",
    width: "75%",
    backgroundColor: "#edf2f4",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    borderRadius: 10,
  },
});
