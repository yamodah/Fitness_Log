import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useData } from "./GlobalContext";
const Page3 = ({ navigation }) => {
  const [pain, setPain] = useState("");
  const [performance, setPerformance] = useState("");
  const dataPack = useData();
  const changeHandler = (setMethod, value) => {
    setMethod(value);
  };
  const collectData = () => {
    dataPack.setData({
      ...dataPack.data,
      pain,
      performance,
    });
    navigation.navigate("Page4", {type:dataPack.data.type});
  };
  // console.log(dataPack.data)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.largeTextBoxContainer}>
          <View style={{ margin: 15 }}>
            <Text style={styles.inputLabel}>Pain(s):</Text>
            <TextInput
              style={{ maxWidth: "100%", padding: 5, minWidth: "100%" }}
              keyboardType="default"
              onChange={({ nativeEvent }) =>
                changeHandler(setPain, nativeEvent.text)
              }
              placeholder="general fitness"
              maxLength={140}
              value={pain}
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
            <Text style={styles.inputLabel}>Performance:</Text>
            <TextInput
              style={{ maxWidth: "100%", padding: 5, minWidth: "100%" }}
              keyboardType="default"
              onChange={({ nativeEvent }) =>
                changeHandler(setPerformance, nativeEvent.text)
              }
              placeholder="general fitness"
              maxLength={140}
              value={performance}
              multiline
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={collectData}>
            <Text style={styles.buttonText}>Next</Text>
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
export default Page3;
