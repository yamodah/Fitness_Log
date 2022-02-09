import { StyleSheet, Text, View } from 'react-native';
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
      <SelectMultipleGroupButton
      group={bodyPartOptions}
      onSelectedValuesChange={(selectedValues)=>{
        setBodyParts([
          ...selectedValues
        ])
      }}
      />
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
  }
});
