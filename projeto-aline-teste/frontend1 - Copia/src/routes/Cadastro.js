import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Api from "../axios/config";


const Cadastro = () =>{
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("");
    const [grupo, setGrupo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [erro, setError] = useState("");
    const navigate = useNavigate();
    const {signup} = useAuth();

    // async function signgupUSer(usuario, email, senha){
    //     Api.post('/user/', {email:email, password:senha, username:usuario})
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log('erro'))
    // }

    const handleCadastro = () => {
        if(!email | !senha) {
            console.log("preencha os campos")
            setError("Preencha todos os campos")
            return;
        }

        const res = signup(email, senha)
        console.log(email, senha, usuario, grupo)

        if(res){
            setError(res);
            console.log(res)
            return;
        }

        Api.post('/user/', {username:usuario, email:email, password:senha, groups:grupo})
        .then(response => console.log(response.data))
        .catch(error => console.log('erro'))

        alert("Usuario cadastrado com sucesso")
        navigate('/')
        
    }
    return(
        <div>
            <form onSubmit={handleCadastro}>
                <h1>Cadastro</h1>
                <label>Usuario</label>
                <input type="text" value={usuario} onChange={(e) => [setUsuario(e.target.value), setError("")]}></input>
                <br/>
                <br/>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}></input>
                <br/>
                <br/>
                <label>Senha</label>
                <input type="password" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}></input>
                <label>{erro}</label>
                <br/>
                <br/>
                <select value={grupo} onChange={(e) => [setGrupo(e.target.value)]}>
                    <option value='2'>Colaborador</option>
                    <option value='1'>Gerente</option>
                </select>
                <br/>
                <br/>
                <input type="submit" value="Cadastrar" ></input>
                <Link to={"/"}>voltar</Link>
            </form>
        </div>
    )
}

export default Cadastro