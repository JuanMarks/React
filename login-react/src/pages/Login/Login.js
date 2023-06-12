import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Login = () =>{
    const {login} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if(!email | !senha){
            setError("preencha todos os campos")
            alert("Preencha os campos")
            return;
        }

        const res = login(email, senha);

        if(res){
            setError(res)
            return;
        }

        navigate("/home");
    };
    return(
        <div>
            <h1>Login</h1>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}></input>
            <label>Senha</label>
            <input type="password" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}></input>
            <input type="submit" value="Entrar" onClick={handleLogin} ></input>
            <Link to={"/cadastro"}>Nao tem uma conta registre-se aqui</Link>
        </div>
    )
}

export default Login