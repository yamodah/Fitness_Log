import React, { useContext,useState } from "react";

export const DataPackContext = React.createContext()
export const useData = ()=>useContext(DataPackContext) 

export default function DataPackProvider({children}){

const [data,setData]=useState({})
const dataPack = {data,setData}

return(
    <DataPackContext.Provider value={dataPack}>
        {children}
    </DataPackContext.Provider>
)
}