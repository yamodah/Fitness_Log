import React, { useState } from "react";
import Checkbox from "expo-checkbox";
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

const Sports = ({ navigation }) => {

  const dataPack = useData();
  const [sport, setSport ] = useState("");
  const [venue, setVenue] = useState("");
  const [competitive, setCompetitive] = useState(false);

  const changeHandler = (setMethod, value) => {
    setMethod(value);
  };

  const collectData =  () => {
     new Promise ((resolve,reject)=>{
      dataPack.setData({
        ...dataPack.data,
        sport,
        venue,
        competitive
      })
      resolve()
     }).then((data)=>{
       console.log(data)
        addWorkout(dataPack.data)
     }).catch(console.error)

  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
      <View style={styles.largeTextBoxContainer}>
          <View style={{ margin: 15 }}>
            <Text style={styles.inputLabel}>Which Sport:</Text>
            <TextInput
              style={{ maxWidth: "100%", padding: 5, minWidth: "100%" }}
              keyboardType="default"
              onChange={({ nativeEvent }) =>
                changeHandler(setSport, nativeEvent.text)
              }
              placeholder="soccer, tennis, basketball, etc ..."
              maxLength={140}
              value={sport}
              multiline
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
            <Text style={styles.inputLabel}>Venue:</Text>
            <TextInput
              style={{ maxWidth: "100%", padding: 5, minWidth: "100%" }}
              keyboardType="default"
              onChange={({ nativeEvent }) =>
                changeHandler(setVenue, nativeEvent.text)
              }
              placeholder="indoor turf, outdoor grass, cement courts, etc ..."
              maxLength={140}
              value={venue}
            />
            <TouchableOpacity
              onPress={Keyboard.dismiss}
              accessible={false}
              style={{ alignSelf: "flex-end" }}
            >
              <Text style={styles.internalDoneLabel}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 15, display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={styles.inputLabel}>Competition ?</Text>
            <Checkbox style={{marginLeft:"55%"}}value={competitive} onValueChange={setCompetitive}/>
          </View>
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
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d90429",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop:100,
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
export default Sports;
