import * as React from 'react'
import './NewEvent.css'
import Api from '../axios/config';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


function Saibamais(){
    const {id} = useParams()
    const [feedbacks, setFeedbacks] = React.useState([]);
    const [meetings, setMeetings] = React.useState([]);

    React.useEffect(() => {
        Api.get(`/feedbacks/`, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'},
            
        })
        
        .then((feedback_data) => {
            console.log(feedback_data.data)
            setFeedbacks(feedback_data.data)
        })
        .catch(error => console.log(error))

        Api.get(`/meetings/${id}/`, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'},
            
        })
        
        .then((meetings_data) => {
            console.log(meetings_data.data)
            setMeetings(meetings_data.data)
        })
        .catch(error => console.log(error))
    }, [])

    const dadosFiltrados = feedbacks.filter(item => (item.meetings_id == id));
    
    return (
        
        <div>
            <h1>{meetings.meetings_title}</h1>
            {meetings.length === 0 ? (<p>Carregando</p>) : (
                dadosFiltrados.map((event) => (
                    <div>
                        <p>{event.feedback_name}</p>
                        <p>{event.feedback_message}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default Saibamais;