import { Children, useContext } from "react";


//! First Step 

export const useContext=createContext ()


//! Second Step


const UserProvider =({Children})=>{

    return(
        <>
        <UserContext.Provider value={{uname:"Elango" ,age:"22"}}>

            {Children}
        
        </UserContext.Provider>
        </>
    )

}

//! Custom HOOK

export const useCustom = ()=>{

    let p=useContext(UserContext)
    return p
}

export default UserProvider