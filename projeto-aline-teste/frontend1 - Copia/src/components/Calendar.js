import logo from '../logo.svg';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row, Form, Button } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Api from '../axios/config';
import interactionPlugin from "@fullcalendar/interaction" 
import { Link } from 'react-router-dom'
import NewEvent from '../routes/NewEvent';
import { useNavigate } from 'react-router-dom';

function Agenda({meetings}){
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [selectedMeeting, setSelectedMeeting] = useState('');
    const [selectedMeeting1, setSelectedMeeting1] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const today = new Date()

    function handleTitleClick(arg) { 
        
        const meetingId = arg.event.id;
        const meetingOn = meetings.find((meeting) => meeting.meetings_id == meetingId);
        
        if(meetingOn) {
            setShow(true)
            setSelectedMeeting(meetingOn)
        }
    }

    const handleDateClick = (event) => {
        const selectedDate = event.dateStr;
        const meetingOnDate = meetings.find((meeting) => meeting.meetings_date === selectedDate);
        
        if(event.date > today){
            setSelectedMeeting1(selectedDate);
            setShow1(true);
        }else{
            alert("Esse dia ja passou")
        }
        
    };

    const eventContent = (eventInfo) => {
        const { event } = eventInfo;
        const eventDate = new Date(event.start);
        const isPastEvent = eventDate < today;
    
    
        return isPastEvent ? 'past-event' : '';
    };

    const navegar = () =>{
        setShow1(false)
        navigate('/')
    }
    
    
    return(
        <div>
            {meetings.length === 0 ? (<p>Carregando</p>) : (
                    
                
                    <div style={{ width:'100%', height:'100%'}}>
                        <Container fluid >
                            <Row>

                                <Col style={{marginLeft:50, height:700, width:1000}} xs lg={3}>
                                    <h2 style={{textAlign:'center'}}>Sua Agenda</h2>
                                    <FullCalendar
                                    plugins={[dayGridPlugin, interactionPlugin]}
                                    initialView='dayGridMonth'
                                    eventClick={handleTitleClick}
                                    dateClick={handleDateClick}
                                    events = {meetings.map((event) => ({
                                        id: event.meetings_id,
                                        title: event.meetings_title,
                                        date: event.meetings_date,
                                        description: event.meetings_desc
                                    }))}
                                    eventClassNames={eventContent}
                                    />
                                </Col>      
                            </Row>
                        </Container>
                    </div>
                
            )}

            {<>
                <Modal style={{color:'black'}} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{selectedMeeting.meetings_title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{selectedMeeting.meetings_desc}</Modal.Body>
                    <p style={{marginLeft:10}}>as {selectedMeeting.meetings_time}</p>
                    <Modal.Footer>
                    <Link style={{marginLeft: 15}} className='btn btn-info' to={`/saibamais/${selectedMeeting.meetings_id}`}>Saiba Mais</Link>
                    <Button variant="primary" onClick={handleClose}>
                    Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>}
            {selectedMeeting && (
            <Modal onClose={() => setShow(false)}></Modal>)}


            {<>
                <Modal style={{color:'black'}} show={show1} onHide={handleClose1}>
                    <NewEvent date={selectedMeeting1}/>
                </Modal>
            </>}
            {selectedMeeting1 && (
            <Modal onClose={() => setShow1(false)}></Modal>)}


            
        </div>

        
        
    )
    
}

export default Agenda;