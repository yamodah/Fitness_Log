import axios from "axios"



export async function listWorkouts(){
    const data =  await axios.get("https://yassine-fitness-api.herokuapp.com/workouts").catch(console.error)
    return data
}
export async function addWorkout(newWorkout){
    console.log(newWorkout)
    await axios.post("https://yassine-fitness-api.herokuapp.com/workouts", newWorkout).catch((error)=>{
        console.error(error.response.data)
    })
}
export async function listWorkoutsByDate(workoutDate){
    const data =  await axios.get(`https://yassine-fitness-api.herokuapp.com/date/${workoutDate}`).catch(console.error)
    return data
}
export async function listWorkoutsByType(workoutType){
    const data =  await axios.get(`https://yassine-fitness-api.herokuapp.com/type/${workoutType}`).catch(console.error)
    return data
}
export async function readWorkout(workoutId){
    const data =  await axios.get(`https://yassine-fitness-api.herokuapp.com/workout/${workoutId}`).catch(console.error)
    return data
}
export async function changeWorkout(updatedWorkout){
    const data =  await axios.put(`https://yassine-fitness-api.herokuapp.com/workout/${updatedWorkout.id}`,updatedWorkout).catch(console.error)
    return data 
}
export async function deleteWorkout(workoutId){
    await axios.delete(`https://yassine-fitness-api.herokuapp.com/workouts/workout/${workoutId}`).catch((error)=>{
        console.error(error.response.data)
    })
}