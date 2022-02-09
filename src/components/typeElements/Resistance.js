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

const Resistance = ({navigation}) => {
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
    dataPack.setData({
      ...dataPack.data,
      bodyParts:bodyParts.join(", ")
    })
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text>I worked out {bodyParts.join(", ")}</Text>
      <View style={styles.largeTextBoxContainer}>
      <SelectMultipleGroupButton
      group={bodyPartOptions}
      containerViewStyle={{
        justifyContent: "flex-start"
      }}
      highLightStyle={{
        borderColor: "gray",
    
        backgroundColor: "transparent",
    
        textColor: "gray",
    
    
        backgroundTintColor: "transparent",
    
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
    backgroundColor: "#d90429",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop:100,
    paddingBottom:150
  },
  button: {
    //   backgroundColor: "#edf2f499",
    borderRadius: 10,
    padding: 10,
    margin: 15,
    //   width:145,
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
