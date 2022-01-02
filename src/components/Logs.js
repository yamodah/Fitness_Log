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
        <View style={styles.container}>
            <Text>workout number:{item.id}</Text>
            <Text>workout date:{item.date}</Text>
            <Text>workout type:{item.type}</Text>
            <Text>workout durration:{item.durration}</Text>
            <Text>workout goal:{item.goal}</Text>
            <Text>pre:{item.pre} post:{item.post} intensity:{item.intensity}</Text>
           {item.type ==="resistance" && <Text>body parts:{item.body_parts}</Text>}
           {item.type ==="sport" && <View><Text>sport:{item.sport} played at/in:{item.venue}</Text><Text>competition:{item.competion}</Text></View>}
           {item.type ==="cardio" && <Text>cardio type:{item.cardio_type} speed:{item.speed}</Text>}
        </View>
        )
    }
    return (
    <View>
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
    }
})
