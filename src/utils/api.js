import axios from "axios"
const URL = process.env.REACT_APP_BASE_API_URL
require("dotenv").config()
export async function listWorkouts(){
    const data =  await axios.get(`${URL}`).catch(console.error)
    //console.log(data)
    return data
}
export async function readWorkout(workoutId){
    const data =  await axios.get(`${URL}/workout/${workoutId}`).catch(console.error)
    return data
}
export async function changeWorkout(updatedWorkout){
    const data =  await axios.put(`${URL}/${updatedWorkout.id}`,updatedNote).catch(console.error)
    return data 
}
export async function deleteWorkour(workoutId){
    await axios.delete(`${URL}/workout/${workoutId}`).catch(console.error)
}