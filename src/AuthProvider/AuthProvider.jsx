import React, { createContext, useState } from 'react';


export const AuthContext = createContext()
const AuthProvider = () => {
    const [user, setUser] = useState(null)

    const createUser =()=>{
        return  
    }

    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;