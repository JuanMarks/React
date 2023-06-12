import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () =>{
    const {logout} = useAuth();
    const navigate = useNavigate();

    const saindo = () => {
        logout()
        navigate('/')
    }
    return(
        <div>
            <h1>Home</h1>
            <button onClick={saindo}>Sair</button>
        </div>
    )
}

export default Home