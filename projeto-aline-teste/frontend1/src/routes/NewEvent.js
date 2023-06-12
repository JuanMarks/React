import * as React from 'react'
import './NewEvent.css'
import Api from '../axios/config';
import { useNavigate } from 'react-router-dom';




function NewEvent() {
    const navigate = useNavigate()
    const [nomeGerente, setnomeGerente] = React.useState('')
    const [nomeColab, setNomeColab] = React.useState('')
    const [reuniaoTit, setReuniaoTit] = React.useState('')
    const [reuniaoDesc, setReuniaoDesc] = React.useState('')
    const [reuniaoLoc, setReuniaoLoc] = React.useState('')
    const [reuniaoDate, setReuniaoDate] = React.useState('')
    const [reuniaoTime, setReuniaoTime] = React.useState('')
    const [reuniaoLink, setReuniaoLink] = React.useState('')
    const [reuniaoStatus, setReuniaoStatus] = React.useState('')

    const createEvent = (e) => {
        e.preventDefault();
        Api.post("/meetings/", {
            meetings_manager_name:nomeGerente, 
            meetings_collaborator_name:nomeColab, 
            meetings_title:reuniaoTit,
            meetings_desc:reuniaoDesc,
            meetings_local:reuniaoLoc,
            meetings_date:reuniaoDate,
            meetings_time:reuniaoTime,
            meetings_link:reuniaoLink,
            meetings_status:reuniaoStatus,
        })
        .then(response => console.log(response.data))
        .catch(error => console.log('erro'))
        navigate('/')
    };
    return (
        <div className='new-post'>
            <h2>Criar Reunião:</h2>
            <form onSubmit={(e) => createEvent(e)} method='post'>
                <div className='form-control-j'>
                    <label htmlFor='nome_evento' >Nome do Gerente: </label>
                    <input type='text' name='nome_evento' placeholder='digite o nome do evento' onChange={(e) => setnomeGerente(e.target.value)}/>

                    <label htmlFor='nome_evento' >Nome do Colaborador: </label>
                    <input type='text' name='data_inicio'  onChange={(e) => setNomeColab(e.target.value)}/>

                    <label htmlFor='nome_evento' >Titulo da Reuniao: </label>
                    <input type='text' name='data_termino' onChange={(e) => setReuniaoTit(e.target.value)}/>

                    <label htmlFor='nome_evento' >Descrição da Reuniao: </label>
                    <input type='text' name='data_termino' onChange={(e) => setReuniaoDesc(e.target.value)}/>

                    <label htmlFor='nome_evento' >Local da Reuniao: </label>
                    <input type='text' name='data_termino' onChange={(e) => setReuniaoLoc(e.target.value)}/>

                    <label htmlFor='nome_evento' >Data da Reuniao: </label>
                    <input type='date' name='data_termino' onChange={(e) => setReuniaoDate(e.target.value)}/>

                    <label htmlFor='nome_evento' >Hora da Reuniao: </label>
                    <input type='text' name='data_termino' placeholder='00:00' onChange={(e) => setReuniaoTime(e.target.value)}/>

                    <label htmlFor='nome_evento' >Link da Reuniao: </label>
                    <input type='text' name='data_termino' onChange={(e) => setReuniaoLink(e.target.value)}/>

                    <label htmlFor='nome_evento' >Status da Reuniao: </label>
                    <input type='text' name='data_termino' onChange={(e) => setReuniaoStatus(e.target.value)}/>

                    <input style={{marginTop: 15}}  type='submit' value='Criar' className='btn btn-primary'/>
                </div>
            </form>
        </div>
    )
}

export default NewEvent
