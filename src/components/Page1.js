import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useData } from "./GlobalContext";
const Page1 = ({ navigation }) => {
  const dataPack = useData();
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("");
  const [duration, setDuration] = useState(0);
  const [goal, setGoal] = useState("");
  const index = ()=>{
    if(type==="Sports")return 0 
    if(type==="Resistance")return 1 
    if(type==="Cardio")return 2
    return 0
  }
  const changeHanlder = (setMethod, value) => {
    setMethod(value);
    console.log(value)
  };


  const collectData = () => {
    dataPack.setData({
      date,
      type,
      duration,
      goal,
      ...dataPack.data,
    });
    navigation.navigate("Page2");
  };
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.labelText}>Date:</Text>
        <DateTimePicker
          style={{ width: 160 }}
          value={date}
          mode="date"
          display="compact"
          onChange={(event, value)=>changeHanlder(setDate,value)}
          themeVariant="dark"
        />
      </View>
      <View style={styles.segements}>
        <SegmentedControl
          values={["Sports", "Resistance", "Cardio"]}
          selectedIndex={index()}
          backgroundColor="#8d99ae"
          tintColor="#edf2f4"
          activeFontStyle={{ color: "#ef233c", fontSize: 17 }}
          onChange={({nativeEvent})=>changeHanlder(setType,nativeEvent.value.toLowerCase())}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={collectData}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    justifyContent: "center",
    alignItems: "center",

    //  backgroundColor:"white"
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    color: "#edf2f4",
  },
  labelText: {
    color: "#edf2f4",
    fontSize: 23,
  },
  segements: {
    width: "80%",
    justifyContent: "center",
    // backgroundColor: "#edf2f4",
  },
});
export default Page1;
