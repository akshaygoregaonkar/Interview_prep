import {createContext,useState,useEffect} from 'react'
import axios from 'axios'

export const DataContext=createContext()

const DataProviver=({children})=>{
    const [state,setState]=useState([])
    useEffect(()=>{
        axios({url:'https://jsonplaceholder.typicode.com/users',
    method:"GET"}).then(response=>setState(response.data))


    },[])
    console.log(state)
    return(
        <DataContext.Provider value={{state,setState}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProviver