import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import { listWorkouts } from '../utils/api'
import { deleteWorkout } from '../utils/api'
const Logs = ({navigation}) => {
    const [logs,setLogs]=useState([])
    useEffect(()=>{
        const ac = new AbortController()
        loadWorkouts(ac.signal)
        return ()=>ac.abort()
    },[])
    const loadWorkouts=(signal)=>listWorkouts({signal}).then((res)=>setLogs(res.data.data)).catch(console.error)
    const confirmDelete = (id) =>{
       return Alert.alert(`Delete LOG#${id} ?`, 'this cannot be undone', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            { text: 'OK', onPress: () => deleteWorkout(id).then(()=>{loadWorkouts()}).catch((error)=>{console.error(error.response.data)})},
          ])
    }
    const renderItem =({item})=>{
        return(
        <View style={styles.cardContainer}>
            <Text style={styles.workoutNum}>ID: {item.id}</Text>
            <View style={styles.textGroup}>   
            <Text style={styles.text}>DATE: {item.date}</Text>
            <Text style={styles.text}>TYPE: {item.type.toUpperCase()}</Text>
            {item.type==="cardio"&& <Text style={styles.text}>DURATION: {item.duration}</Text>}
            <Text style={styles.text}>GOAL: {item.goal}</Text>
            </View>
            <View style={styles.textGroup}> 
            <Text style={styles.text}>PAIN: {item.pain}</Text>
            <Text style={styles.text}>PERFORMANCE: {item.performance}</Text>
            <Text style={styles.feelingsText}>PRE: {item.pre} || POST: {item.post} || INTENSITY: {item.intensity}</Text>
            </View>
            <View style={styles.textGroup}>
           {item.type ==="resistance" && <Text style={styles.feelingsText}>BODY PARTS: {item.body_parts}</Text>}
           {item.type ==="sports" && <View><Text style={styles.feelingsText}>SPORT: {item.sport} || AT/IN: {item.venue}</Text><Text style={styles.feelingsText}>COMPETITION: {item.competion?"YES":"NO"}</Text></View>}
           {item.type ==="cardio" && <Text style={styles.feelingsText}>cardio type: {item.cardio_type} || speed: {item.speed}</Text>}
            </View>
            <View style={{ marginTop:10, backgroundColor:"#d90429", padding:10, borderRadius:5, borderColor:"white", borderRadius:10,borderWidth:1}}>
               <TouchableOpacity onPress={()=>{confirmDelete(item.id)}}>
                <Text style={{color:"white", fontSize:15}}>
                    DELETE
                </Text>
            </TouchableOpacity>  
            </View>
            
        </View>
        )
    }
    return (
    <View style={styles.container}>
            <FlatList
            data={logs}
            renderItem={renderItem}
            keyExtractor={item=>item.id+item.type}
            style={{paddingBottom:100}}
            /> 
        </View>
    )
}

export default Logs

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#5C6378",
        alignItems: "center",
        justifyContent: "center",
        padding:10,
        
        
    },
    cardContainer:{
        backgroundColor: "#27293C",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:40,
        marginTop:10,
        borderRadius:10,
        padding:15,
        maxWidth:"100%"
    },
    textGroup:{
        // marginBottom:2,
        // marginTop:10,
        // backgroundColor:"#5C6378",
        borderRadius:10,
        padding:10,
        width:"95%"
    },
    workoutNum:{
        color:"#EDF2F4",
        fontSize:20
    },
    text:{
        margin:10,
        color:"#EDF2F4",


    },
    feelingsText:{
        margin:10,
        textAlign:"center",
        color:"#EDF2F4",
    },


})
