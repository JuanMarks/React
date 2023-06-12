import React from 'react'
import Api from '../axios/config';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Home.css'
import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate()
    const [meetings, setMeetings] = React.useState([]);
    
    const getEvents = async() => {
        try {
            const response = await Api.get("/meetings/")
            const data = response.data
            console.log(data)
            setMeetings(data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getEvents()
    }, [])

    const removeEvent = (id) => {
        Api.delete(`/meetings/${id}/`)
        .then(resposta => {
            if(resposta.ok){
                this.getEvents()
            }
        })
        navigate('/')
        
    }
    return (
        <div>
        {meetings.length === 0 ? (<p>Carregando</p>) : (
            meetings.map((event) => (
                <div className='Cartao' key={event.id}>
                    <Card style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title style={{color: 'black'}}>{event.meetings_title}</Card.Title>
                            <Card.Text>{event.meetings_desc}</Card.Text>
                            <Button className='btn btn-primary' >Go somewhere</Button>
                            <Link style={{marginLeft: 15}} className='btn btn-info' to={`/meetings/${event.meetings_id}/`}>Update</Link>
                            <Button onClick={() => removeEvent(event.meetings_id)} style={{marginTop:'3%'}} className='btn btn-danger'>Deletar</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))
        )}
        </div>
    )
}

export default Home
