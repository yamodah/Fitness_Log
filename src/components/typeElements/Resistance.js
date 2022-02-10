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

  const bodyPartOptions = [
    {value:"Biceps"},
    {value:"Triceps"},
    {value:"Hamstrings"},
    {value:"Quads"},
    {value:"Glute"},
    {value:"Shoulders"},
    {value:"Upper Back"},
    {value:"Lower Back"},
    {value:"Core"},
    {value:"Full-Body"},
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
      <Text>I worked out {bodyParts.join(", ")}</Text>
      <View style={styles.largeTextBoxContainer}>
      <SelectMultipleGroupButton
      group={bodyPartOptions}
      containerViewStyle={{
        justifyContent: "flex-start",
        width:275
      }}
      highLightStyle={{
        borderColor: "gray",
        backgroundColor: "white",
        textColor: "gray",
        backgroundTintColor: "transparent",
        borderRadius:15,
        padding:10

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
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={collectData}>
            <Text style={styles.buttonText}>Submit</Text>
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
    paddingTop:100,
    paddingBottom:150
  },
  button: {
    backgroundColor: "#27293C",
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
