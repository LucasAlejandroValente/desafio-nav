import React, { createContext, useContext, useState } from "react";
import { itemData } from "../data/itemData";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {

    const [items, setItems] = useState([itemData])
    console.log(items)
    
      return (
         <AppContext.Provider value={{ items }}>
             { children }
        </AppContext.Provider>
      )
    }

export default AppContextProvider
