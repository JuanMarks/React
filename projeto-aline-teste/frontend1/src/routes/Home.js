import React from 'react'
import Api from '../axios/config';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Home.css'



function Home() {
    const [meetings, setMeetings] = React.useState([]);

    React.useEffect(() => {
        Api.get(`/meetings/`, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'},
            
        })
        
        .then((data) => {
            console.log(data.data)
            setMeetings(data.data)
        })
        .catch(error => console.log(error))
    }, [])


    return (
        <div>
        {meetings.length === 0 ? (<p>Carregando</p>) : (
            meetings.map((event) => (
                <div className='Cartao' key={event.id}>
                    <Card style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title style={{color: 'black'}}>{event.meetings_title}</Card.Title>
                            <Card.Text>{event.meetings_desc}</Card.Text>
                            <Card.Text style={{color:'green'}}>{event.meetings_status}</Card.Text>
                            <Link style={{marginLeft: 15, marginBottom:10}} className='btn btn-primary' to={`/feedback/${event.meetings_id}`}>Dê o seu FeedBack</Link>
                            <Link style={{marginLeft: 15}} className='btn btn-info' to={`/saibamais/${event.meetings_id}`}>Saiba Mais</Link>
                        </Card.Body>
                    </Card>
                </div>
            ))
        )}
        </div>
    )
}

export default Home
