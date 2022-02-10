import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";

import { useData } from "../GlobalContext";
const Cardio = ({ navigation, modalToggle}) => {

  const dataPack = useData();
  const [cardio_type, setCardioType] = useState("");
  const [distance, setDistance] = useState(null);
  const [speed, setSpeed] = useState("");

  const changeHandler = (setMethod, value) => {
    setMethod(value);
  };

  const collectData = () => {
    new Promise((resolve,reject)=>{
      dataPack.setData({
        ...dataPack.data,
        cardio_type,
        distance:Number(distance),
        speed
      })
      resolve()
    }).then(()=>{
      modalToggle(true)
    })
    // navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
      <View style={{width:"100%", justifyContent:"center", alignItems:"center", height:300, backgroundColor:"#27293C", padding:15, borderRadius:10, borderColor:"white", borderWidth:1}}>

      <View style={styles.largeTextBoxContainer}>
          <View style={{ margin: 15 }}>
            <Text style={styles.inputLabel}>Type of Cardio</Text>
            <TextInput
              style={{ maxWidth: "100%", padding: 5, minWidth: "100%" }}
              keyboardType="default"
              onChange={({ nativeEvent }) =>
                changeHandler(setCardioType, nativeEvent.text)
              }
              placeholder="running, jump roping, biking, etc ..."
              maxLength={140}
              value={cardio_type}
            />
            <TouchableOpacity
              onPress={Keyboard.dismiss}
              accessible={false}
              style={{ alignSelf: "flex-end" }}
            >
              <Text style={styles.internalDoneLabel}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 15 }}>
            <Text style={styles.inputLabel}>Distance:</Text>
            <TextInput
              style={{ maxWidth: "100%", padding: 5, minWidth: "100%" }}
              keyboardType="number-pad"
              onChange={({ nativeEvent }) =>
                changeHandler(setDistance, nativeEvent.text)
              }
              placeholder="in miles"
              maxLength={140}
              value={distance}
              returnKeyType="done"
            />
            <TouchableOpacity
              onPress={Keyboard.dismiss}
              accessible={false}
              style={{ alignSelf: "flex-end" }}
            >
              <Text style={styles.internalDoneLabel}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 15 }}>
            <Text style={styles.inputLabel}>Speed:</Text>
            <TextInput
              style={{ maxWidth: "100%", padding: 5, minWidth: "100%" }}
              keyboardType="number-pad"
              onChange={({ nativeEvent }) =>
                changeHandler(setSpeed, nativeEvent.text)
              }
              placeholder="in miles per hour"
              maxLength={140}
              value={speed}
              returnKeyType="done"
            />
            <TouchableOpacity
              onPress={Keyboard.dismiss}
              accessible={false}
              style={{ alignSelf: "flex-end" }}
            >
              <Text style={styles.internalDoneLabel}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2d42",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop:60,
    paddingBottom:150
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
    textAlign: "center",
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
    maxHeight: "100%",
    width: "75%",
    backgroundColor: "#edf2f4",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    borderRadius: 10,
  },
  inputLabel: {
    marginRight: 10,
    color: "#d90429",
    fontSize: 15,
    // alignSelf:"center"
  },
  internalDoneLabel: {
    marginLeft: 10,
    marginTop: 5,
    color: "#d90429",
    fontSize: 15,
    textAlign: "right",
    // alignSelf: "flex-end",
  },
});
export default Cardio;
