import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Api from "../../axios/config";


const Cadastro = () =>{
    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("");
    const [erro, setError] = useState("");
    const navigate = useNavigate();
    const {cadastro} = useAuth();

    async function signgupUSer(credenciais){
        Api.post('/user/', credenciais)
        .then(response => console.log(response.data))
        .catch(error => console.log('erro'))
    }

    const handleCadastro = () => {
        if(!email | !senha) {
            setError("Preencha todos os campos")
            return;
        }

        const res = cadastro(email, senha)
        

        if(res){
            setError(res);
            return;
        }
        signgupUSer({username:usuario, email:email, password:senha, group:""})
        alert("Usuario cadastrado com sucesso")
        navigate("/")
    }
    return(
        <div>
            <form>
                <h1>Cadastro</h1>
                <label>Nome de Usuario</label>
                <input type="text" value={usuario} onChange={(e) => [setUsuario(e.target.value), setError("")]}></input>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}></input>
                <label>Senha</label>
                <input type="password" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}></input>
                <label>{erro}</label>
                <input type="submit" value="Cadastrar" onClick={handleCadastro} ></input>
                <Link to={"/"}>voltar</Link>
            </form>
        </div>
    )
}

export default Cadastro