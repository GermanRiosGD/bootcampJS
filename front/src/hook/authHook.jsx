import { createContext,useContext, useState } from "react";

const authContext = createContext()

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)
}

const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const signin = cb => {
        setUser("German Rios")
        cb()
      }
    const signout = cb => {
        setUser(null)
        cb()
      }
    return {
        user,
        signin,
        signout
    }
}
