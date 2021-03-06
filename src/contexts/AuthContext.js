import React, {useState,useEffect,useContext} from 'react';
import { auth } from '../Firebase/Firebase';
import { useHistory } from 'react-router';

const AuthContext = React.createContext();

export const useAuth = () => {
 const context = useContext(AuthContext);
 if (!context) {
     throw Error("Error in AuthContext")
 }
 return context;
}    


export default function AuthProvider ({ children }) {
    
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if (user) {
                history.push('/chats')
            }
        })
        
    }, [user,history])

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
