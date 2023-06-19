import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useState } from "react";

const DataStore = createContext()
export const DataSroreProvider =({children})=>{
  const mobile = useMediaQuery('(max-width: 600px)')
  const [mode , setMode]=useState(localStorage.mode ? JSON.parse(localStorage.mode):false)
  const [bookTable, setBookTable] = useState(false);

  return(
    <DataStore.Provider value={{mobile,mode , setMode,bookTable, setBookTable

    }}>{children}</DataStore.Provider>
  )
}
export const Store = ()=>{
  return useContext(DataStore)
}