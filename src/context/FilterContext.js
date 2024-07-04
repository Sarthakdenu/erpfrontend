import React, { createContext, useState } from "react";
const FilterContext = createContext()
const FilterProvider = ({children})=>
    {
        const [filterdata, setFilterdata ]=useState([])
        const value={
           filterdata,setFilterdata
        }
        return (
            <FilterContext.Provider value={value}>
               {children}
            </FilterContext.Provider>
        )
    }
export{ FilterContext,FilterProvider}