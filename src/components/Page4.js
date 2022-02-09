import React, {useState} from 'react'
import { StyleSheet, View, Modal, TouchableOpacity, Text} from 'react-native'
import Cardio from './typeElements/Cardio';
import Sports from './typeElements/Sports';
import Resistance from './typeElements/Resistance';
import { useData } from './GlobalContext';
import { addWorkout } from '../utils/api';
const Page4 = ({navigation,route}) => {
  const [visible,setVisible]=useState(false)
  const dataPack = useData()
  const {type}= route.params
  const currentWorkout = Object.entries(dataPack.data).map(([key,value],index)=>{
    return(<View key={index} >
      <Text>{`${key}: ${value}`}</Text>
    </View>)
  })
 
    return (
        <View style={styles.container}>
          {type==="cardio" && <Cardio navigation={navigation} modalToggle={setVisible}/>}
          {type==="sports" && <Sports navigation={navigation} modalToggle={setVisible}/>}
          {type==="resistance" && <Resistance navigation={navigation} modalToggle={setVisible}/>}
          <Modal
          animationType='slide'
          visible={visible}
          
          >
          <View style={styles.container}>
            <View style={{backgroundColor:"white", borderRadius:15, padding:10, maxWidth:250}}>
            {currentWorkout}
            </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setVisible(!visible)
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() =>{
            addWorkout(dataPack.data)
            .then(()=>{ 
              setVisible(false)
              navigation.navigate("Home")
            }).catch(console.error)
          }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
          </View>
          </Modal>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d90429",
      alignItems: "center",
      justifyContent: "center",
    },button: {
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
      alignSelf: "center",
      marginBottom: 75,
  
      //  backgroundColor:"white"
    },
  })
export default Page4


