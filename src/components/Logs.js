import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { listWorkouts } from '../utils/api'
const Logs = () => {
    const [logs,setLogs]=useState([])

    useEffect(()=>{
        listWorkouts().then((res)=>setLogs(res.data.data)).catch(console.error)
    },[])

    const renderItem =({item})=>{
        return(
        <View style={styles.cardContainer}>
            <View style={styles.textGroup}>    
            <Text style={styles.workoutNum}>ID: {item.id}</Text>
            <Text style={styles.text}><>DATE:</> {item.date}</Text>
            <Text style={styles.text}>TYPE: {item.type}</Text>
            {item.type==="cardio"&& <Text style={styles.text}>DURATION: {item.duration}</Text>}
            </View>
            <View style={styles.textGroup}> 
            <Text style={styles.text}>GOAL: {item.goal}</Text>
            <Text style={styles.text}>PRE: {item.pre} || POST: {item.post} || INTENSITY: {item.intensity}</Text>
           {item.type ==="resistance" && <Text style={styles.text}>BODY PARTS: {item.body_parts}</Text>}
           {item.type ==="sports" && <View><Text style={styles.text}>SPORT: {item.sport} || AT/IN: {item.venue}</Text><Text style={styles.text}>COMPETITION: {item.competion?"YES":"NO"}</Text></View>}
           {item.type ==="cardio" && <Text style={styles.text}>cardio type: {item.cardio_type} || speed: {item.speed}</Text>}
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
            /> 
        </View>
    )
}

export default Logs

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#d90429",
        alignItems: "center",
        justifyContent: "center",
        
        
    },
    cardContainer:{
        backgroundColor: "#edf2f499",
        alignItems: "center",
        justifyContent: "center",
        marginTop:15,
        borderRadius:10,
        padding:15,
        width:"100%"
    },
    textGroup:{
        marginBottom:2,
        marginTop:10,
        backgroundColor:"#edf2f4",
        borderRadius:10,
        padding:10,
        width:"95%"
    },
    workoutNum:{
        color:"#d90429"
    },
    text:{
        marginTop:2
    }

})
