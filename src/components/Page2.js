import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ViewPropTypes } from "react-native";
import Slider from "@react-native-community/slider";
import { useData } from "./GlobalContext";
const Page2 = ({ navigation, route }) => {
  const [pre, setPre] = useState(0);
  const [post, setPost] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const dataPack= useData()

  const changeHanlder = (setMethod, value) => {
    setMethod(value);
  };
  const collectData = ()=>{
    dataPack.setData({
      pre,post,intensity,
      ...dataPack.data
    })
    navigation.navigate("Page3")
  }
  return (
    <View style={styles.container}>
      <View style={styles.slidersContainer}>

      <View style={styles.sliderContainer}>
      <Text style={styles.sliderText}>
      Pre exercise
      </Text>
      <Slider
        style={{ width: 245, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        tapToSeek={true}
        step={1}
        onSlidingComplete={(val)=>changeHanlder(setPre,val)}
      />
      </View>
      <View style={styles.sliderContainer}>
      <Text style={styles.sliderText}>
      Post exercise
      </Text>
      <Slider
        style={{ width: 245, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        tapToSeek={true}
        step={1}
        onSlidingComplete={(val)=>changeHanlder(setPost,val)}
      />
      </View>
      <View style={styles.sliderContainer}>
      <Text style={styles.sliderText}>
       General intensity ?
      </Text>
      <Slider
        style={{ width: 245, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        tapToSeek={true}
        step={1}
        onSlidingComplete={(val)=>changeHanlder(setIntensity,val)}
        />
        </View>
       </View> 
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={collectData}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Cancel</Text>
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
    justifyContent: "space-evenly",
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
    fontSize: 20,
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
  sliderContainer:{
    flexDirection:"column",
    justifyContent:"center",
    width:350,
    margin:15,
    padding:5,
    alignItems:"center",
  },
  sliderText:{
    color:"#edf2f4",
    fontSize:25,
    textAlign:"center",
    marginBottom:5
  },
  slidersContainer:{
  margin:5
  }
});
export default Page2;
