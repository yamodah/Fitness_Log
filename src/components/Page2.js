import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { useData } from "./GlobalContext";
const Page2 = ({ navigation, route }) => {
  const [pre, setPre] = useState(0);
  const [post, setPost] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const dataPack= useData()

  const changeHandler = (setMethod, value) => {
    setMethod(value);
  };
  const collectData = ()=>{
    dataPack.setData({
      ...dataPack.data,
      pre,post,intensity,
    })
    navigation.navigate("Page3")
  }
  // console.log(dataPack.data)
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
        minimumTrackTintColor="#d90429"
        maximumTrackTintColor="#2b2d42"
        tapToSeek={true}
        step={1}
        onSlidingComplete={(val)=>changeHandler(setPre,val)}
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
        minimumTrackTintColor="#d90429"
        maximumTrackTintColor="#2b2d42"
        tapToSeek={true}
        step={1}
        onSlidingComplete={(val)=>changeHandler(setPost,val)}
      />
      </View>
      <View style={styles.sliderContainer}>
      <Text style={styles.sliderText}>
       General intensity
      </Text>
      <Slider
        style={{ width: 245, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#d90429"
        maximumTrackTintColor="#2b2d42"
        tapToSeek={true}
        step={1}
        onSlidingComplete={(val)=>changeHandler(setIntensity,val)}
        />
        </View>
       </View> 
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.goBack()}}>
              <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={collectData}
        >
          <Text style={styles.buttonText}>Next</Text>
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
    justifyContent: "space-between",
    paddingTop:90,
    paddingBottom:60
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
    alignSelf:"center",
    marginBottom:75

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
    color:"#d90429",
    fontSize:18,
    alignSelf:"center",
    marginBottom:5,
    marginLeft:10
  },
  slidersContainer:{
  margin:5,
  backgroundColor:"#edf2f4",
  //d90429
  borderRadius:15,
  maxWidth:"85%",
  justifyContent:"center",
  alignItems:"center",
  paddingBottom:15
  }
});
export default Page2;
