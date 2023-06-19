import * as React from 'react'
import './NewEvent.css'
import Api from '../axios/config';
import { useNavigate, useParams } from 'react-router-dom';

function FeedBack(){
    const navigate = useNavigate();
    const {id} = useParams()
    const [msg, setMsg] = React.useState("");
    const [ava, setAva] = React.useState();
    const userData = localStorage.getItem("users_db")
    const usuario = JSON.parse(userData)

    const createFeedback = (e) => {
        e.preventDefault();
        Api.post("/feedbacks/", {
            feedback_name:usuario[0].username,
            meetings_id:id,
            feedback_message:msg,
            feedback_date_created:"10/10/2023",
            feedback_evaluation:ava
        })
        .then(response => console.log(response.data))
        .catch(error => console.log('erro'))
        navigate('/')
    };

    return(
        <div className='new-post'>
            <h2>FEEDBACK:</h2>
            <form onSubmit={(e) => createFeedback(e)} method='post'>
                <div className='form-control-j'>

                    <label htmlFor='nome_evento' >Conte nos o que vc achou?: </label>
                    <input type='text' name='data_inicio'  onChange={(e) => setMsg(e.target.value)}/>

                    <label htmlFor='nome_evento' >Digite sua avaliação de 0 a 10: </label>
                    <input type='number' name='data_termino' onChange={(e) => setAva(e.target.value)}/>

                    <input style={{marginTop: 15}}  type='submit' value='Criar' className='btn btn-primary'/>
                </div>
            </form>
        </div>
    );
}

export default FeedBack;