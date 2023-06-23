import React from 'react'
import Api from '../axios/config';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Home.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Agenda from '../components/Calendar';
import Modal from 'react-bootstrap/Modal';



function Home() {
    const [meetings, setMeetings] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    React.useEffect(() => {
        Api.get(`/meetings/`, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'},
            
        })
        
        .then((data) => {
            
            setMeetings(data.data)
        })
        .catch(error => console.log(error))
    }, [])

    const dadosFiltrados = meetings.filter(item => (item.meetings_status === "Concluido"));
    const dadosStatus = meetings.filter(item => (item.meetings_status === "Aprovado"));
    

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Historico
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{color:"black"}}>Historico</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {meetings.length === 0 ? (<p>Carregando</p>) : (
                            
                        dadosFiltrados.map((event) => (
                            <div>
                                <Card style={{ marginBottom:20, width: '18rem' }}>
                                
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
                </Offcanvas.Body>
            </Offcanvas>
            <Agenda meetings={meetings}/>
        </div>
    )
}

export default Home
