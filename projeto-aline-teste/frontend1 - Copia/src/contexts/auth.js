import { createContext, useEffect, useState } from "react";
import Api from "../axios/config";


export const AuthContext = createContext({})
export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState()
    const [userData, setUserData] = useState()

    useEffect(()=>{
        Api.get(`/user/`, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'},
            
        })
        
        .then((data) => {
            setUserData(data.data)
        })
        .catch(error => console.log(error))

        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem(userData);

        if(userToken && userStorage){
            const hasUser = JSON.parse(userStorage)?.filter((user) => user.email === JSON.parse(userToken).email);
            if(hasUser) setUser(hasUser[0]);
        }
    }, []);

    const login = (email, password) => {
        
        
        const hasUser = userData.filter((userd) => (userd.email === email));
        

        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email, token}));
                localStorage.setItem("users_db", JSON.stringify(hasUser)); 
                setUser({email,password});
                return;
            }else{
                alert("email ou senha incorreto")
                return "Email ou senha incorretos"
            }
        }else{
            alert("usuario nao cadastrado")
            return "usuario nao cadastrado"
        }
    }

    const signup = (email, password) => {
        
        
        const hasUser = userData.filter((userd) => (userd.email === email));
        console.log(hasUser)
        if(hasUser?.length){
            alert("Ja existe um conta com esse email")
            return "Ja tem uma conta com esse email"
        }
        
        return;
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user_token")
    }
    return <AuthContext.Provider value={{user, signed: !!user, login, signup, logout}}>{children}</AuthContext.Provider>
}