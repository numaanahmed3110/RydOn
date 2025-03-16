import React, { createContext } from 'react'
import {useState} from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const userDataContext = createContext()

const UserContext = ({ children }) => {
    
const [user, setUser] = useState({
    fullname:{
        firstname:"",
        lastname:""
    },
    email:''
});

    return (
        <div>
            <userDataContext.Provider value={{user, setUser}}>
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext