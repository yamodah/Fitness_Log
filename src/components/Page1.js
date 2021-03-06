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
import DateTimePicker from "@react-native-community/datetimepicker";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useData } from "./GlobalContext";
const Page1 = ({ navigation }) => {
  const dataPack = new useData();
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("sports");
  const [duration, setDuration] = useState("");
  const [goal, setGoal] = useState("");
  const index = () => {
    if (type === "Sports") return 0;
    if (type === "Resistance") return 1;
    if (type === "Cardio") return 2;
    return 0;
  };
  const changeHandler = (setMethod, value) => {
    setMethod(value);
  };

  const collectData = () => {
    dataPack.setData({
      ...dataPack.data,
      date,
      type,
      duration: Number(duration),
      goal,
    });
    navigation.navigate("Page2");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={{width:"85%", justifyContent:"space-between", alignItems:"center", height:300, backgroundColor:"#27293C", padding:15,paddingBottom:20, borderRadius:10, borderColor:"white", borderWidth:1}}>

        <View style={styles.dateContainer}>
          <Text style={styles.labelText}>Date:</Text>
          <DateTimePicker
            style={{ width: 250 }}
            value={date}
            mode="date"
            display="compact"
            onChange={(event, value) => changeHandler(setDate, value)}
            themeVariant="dark"
          />
        </View>
        <View style={styles.segements}>
          <SegmentedControl
            style={{ height: 35 }}
            values={["Sports", "Resistance", "Cardio"]}
            selectedIndex={index()}
            backgroundColor="#8d99ae"
            tintColor="#edf2f4"
            fontStyle={{ fontSize: 13, color: "#edf2f4" }}
            activeFontStyle={{ color: "#ef233c", fontSize: 16 }}
            onChange={({ nativeEvent }) =>
              changeHandler(setType, nativeEvent.value.toLowerCase())
            }
          />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={styles.inputLabel}>Duration:</Text>
          <View style={styles.durationContainer}>
            <TextInput
              keyboardType="number-pad"
              onChange={({ nativeEvent }) =>
                changeHandler(setDuration, nativeEvent.text)
              }
              placeholder="min(s)"
              returnKeyType="done"
              value={`${duration}`}
            />
          </View>
        </View>
        <View style={styles.goalContainer}>
          <Text style={styles.internalLabel}>Goal:</Text>
          <TextInput
            style={{ width: "100%", padding: 10 }}
            keyboardType="default"
            onChange={({ nativeEvent }) =>
              changeHandler(setGoal, nativeEvent.text)
            }
            placeholder="general fitness"
            maxLength={140}
            value={goal}
            multiline
          />
          <TouchableOpacity
            onPress={Keyboard.dismiss}
            accessible={false}
            style={{alignSelf:"flex-end", padding:5}}
          >

              <Text style={styles.internalDoneLabel}>Done</Text>

          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
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
    backgroundColor: "#2b2d42",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 80,
    paddingTop:50
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    
    // alignSelf:"flex-start"
    //  backgroundColor:"white"
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    color: "white",
    // marginBottom: 15,
    marginTop: 5,
  },
  labelText: {
    color: "white",
    fontSize: 18,
  },
  segements: {
    width: "100%",
    justifyContent: "center",
    marginBottom: 10,
    // backgroundColor: "#edf2f4",
  },
  durationContainer: {
    marginLeft: 17,

    borderRadius: 10,
    height: 20,
    maxWidth: 65,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    // alignSelf:"flex-start"
  },
  goalContainer: {
    maxHeight: "65%",
    width: "95%",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    borderRadius: 10,
    padding: 8,
  },
  inputLabel: {
    marginLeft: 50,
    color: "#edf2f4",
    fontSize: 18,
    alignSelf: "flex-start",
  },
  internalLabel: {
    marginLeft: 10,
    marginTop: 5,
    color: "#d90429",
    fontSize: 18,
  },
  internalDoneLabel: {
    marginLeft: 10,
    marginTop: 5,
    color: "#d90429",
    fontSize: 18,
    alignSelf: "flex-end",
  },
  longInputLabel: {
    marginRight: 10,
    color: "#d90429",
    fontSize: 15,
    alignSelf: "flex-start",
  },
  doneDurationText: {
    color: "#d90429",
    textAlign: "center",
    fontSize: 12,
  },
});
export default Page1;
