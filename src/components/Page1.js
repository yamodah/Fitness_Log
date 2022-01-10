import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useData } from "./GlobalContext";
const Page1 = ({ navigation }) => {
  const dataPack = useData();
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("Sports");
  const [duration, setDuration] = useState(0);
  const [goal, setGoal] = useState("");
  const index = () => {
    if (type === "Sports") return 0;
    if (type === "Resistance") return 1;
    if (type === "Cardio") return 2;
    return 0;
  };
  const changeHandler = (setMethod, value) => {
    setMethod(value);
    // console.log(typeof value)
  };

  const collectData = () => {
    dataPack.setData({
      date,
      type,
      duration: Number(duration),
      goal,
      ...dataPack.data,
    });
    navigation.navigate("Page2");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.labelText}>Date:</Text>
        <DateTimePicker
          style={{ width: 160 }}
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
      <View style={styles.durationContainer}>
        <Text style={styles.inputLabel}>Workout Duration:</Text>
        <TextInput
          keyboardType="number-pad"
          onChange={({ nativeEvent }) =>
            changeHandler(setDuration, nativeEvent.text)
          }
          placeholder="min(s)"
          returnKeyType="done"
          value={duration}
        />
        
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.inputLabel}>Workout session goal:</Text>
        <TextInput
        style={{maxWidth:155, padding:5}}
          keyboardType="default"
          onChange={({ nativeEvent }) =>
            changeHandler(setGoal, nativeEvent.text)
          }
          placeholder="general fitness"
          maxLength={140}
          returnKeyType="return"
          value={goal}
          multiline
        />
      </View>
        <TouchableOpacity onPress={Keyboard.dismiss} accessible={false} style={{marginTop:10}}><View><Text style={styles.buttonText}>Done</Text></View></TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
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
    backgroundColor: "#d90429",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop:55
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
    marginTop:150
    // alignSelf:"flex-start"
    //  backgroundColor:"white"
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    color: "#edf2f4",
    marginBottom: 10,
  },
  labelText: {
    color: "#edf2f4",
    fontSize: 23,
  },
  segements: {
    width: "80%",
    justifyContent: "center",
    marginBottom: 10,
    // backgroundColor: "#edf2f4",
  },
  durationContainer: {
    marginBottom: 15,
    marginTop:15,
    borderRadius: 10,
    minWidth: 20,
    minHeight: 30,
    maxWidth:"85%",
    backgroundColor: "#edf2f4",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection:"row"
  },
  goalContainer: {
    marginBottom: 15,
    marginTop:15,
    borderRadius: 10,
    minWidth: 20,
    minHeight: 30,
    maxWidth:"85%",
    backgroundColor: "#edf2f4",
    alignItems: "center",
    justifyContent: "center",
    padding:15,
    flexDirection:"row"
  },
  inputLabel:{
    marginRight:10,
    color:"#d90429",
    fontSize:15,
    // alignSelf:"center"
  }
});
export default Page1;
