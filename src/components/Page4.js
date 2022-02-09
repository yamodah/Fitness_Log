import React, {useState} from 'react'
import { StyleSheet, View, Modal, TouchableOpacity} from 'react-native'
import Cardio from './typeElements/Cardio';
import Sports from './typeElements/Sports';
import Resistance from './typeElements/Resistance';
import { useData } from './GlobalContext';
const Page4 = ({navigation,route}) => {
  const [visible,setVisible]=useState(false)
  const dataPack = useData()
  const {type}= route.params
    return (
        <View style={styles.container}>
          {type==="cardio" && <Cardio navigation={navigation} modalToggle={setVisible}/>}
          {type==="sports" && <Sports navigation={navigation} modalToggle={setVisible}/>}
          {type==="resistance" && <Resistance navigation={navigation} modalToggle={setVisible}/>}
          <Modal
          animationType='slide'
          visible={visible}
          >
            <Text>{dataPack.data}</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={collectData}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
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
    }
  })
export default Page4


