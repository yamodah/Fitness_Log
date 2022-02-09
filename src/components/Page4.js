import React from 'react'
import { StyleSheet, View} from 'react-native'
import Cardio from './typeElements/Cardio';
import Sports from './typeElements/Sports';
import Resistance from './typeElements/Resistance';
const Page4 = ({navigation,route}) => {

  const {type}= route.params
    return (
        <View style={styles.container}>
          {type==="Cardio" && <Cardio navigation={navigation}/>}
          {type==="Sports" && <Sports navigation={navigation}/>}
          {type==="resistance" && <Resistance navigation={navigation}/>}
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


