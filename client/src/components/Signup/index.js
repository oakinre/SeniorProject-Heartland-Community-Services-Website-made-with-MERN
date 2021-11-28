import React, {useState, useEffect} from "react"
import Axios from 'axios'
import { 
Container, 
FormContent,
Icon, 
FormWrap, 
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text,
Form2
} from './SignupElements'



const SignUp = () => {
    const [eventName, setEventName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const[newEventName, setNewEventName] = useState("");
    const[newEventDate, setNewEventDate] = useState("");
    const[newEventTime, setNewEventTime] = useState("");
    const [eventList, setEventList] = useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=>{
            setEventList(response.data);
        })
    }, []);

    const addToList = () => {
        Axios.post("http://localhost:3001/insert", {
            eventName: eventName,
            date: date,
            time: time
        });
    };

    const updatedEventName = (id) => {
        Axios.put("http://localhost:3001/update1", {id: id, newEventName: newEventName})
    };
    const updatedEventDate = (id) => {
        Axios.put("http://localhost:3001/update2", {id: id, newEventDate: newEventDate})
    };
    const updatedEventTime = (id) => {
        Axios.put("http://localhost:3001/update3", {id: id, newEventTime: newEventTime})
    };
    const deleteEvent = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    };
    return (
        <Container>
            <FormWrap>
                <Icon to="/">HCS</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Post An Event</FormH1>
                            <FormLabel htmlFor='for'>Event Name</FormLabel>
                            <FormInput type="text" 
                            onChange={(event) => {
                                setEventName(event.target.value);
                            }} required />
                            <FormLabel htmlFor='for'>Event Date</FormLabel>
                            <FormInput 
                            type="text" 
                            onChange={(event) => {
                                setDate(event.target.value);
                            }} required />
                            <FormLabel htmlFor='for'>Event Time</FormLabel>
                            <FormInput 
                            type="text" 
                            onChange={(event) => {
                                setTime(event.target.value);
                            }} required />
                            <FormButton onClick={addToList} type='submit'>Add to Events List</FormButton>
                    </Form>
                    <h1>Events List</h1>
                    {eventList.map((val, key)=> {
                        return (
                        <div key={key} className="event"> 
                            <h1>Name: {val.eventName}</h1>
                            <h1>Date: {val.eventDate}</h1>
                            <h1>Time: {val.eventTime}</h1>
                            <input type="text" placeholder="New Event Name..." onChange={(event) => {
                                setNewEventName(event.target.value)}} />
                            <button onClick={() => updatedEventName(val._id)}> Update </button>
                            <input type="text" placeholder="New Event Date..." onChange={(event) => {
                                setNewEventDate(event.target.value)}} />
                            <button onClick={() => updatedEventDate(val._id)}> Update </button>
                            <input type="text" placeholder="New Event Time..." onChange={(event) => {
                                setNewEventTime(event.target.value)}} />
                            <button onClick={() => updatedEventTime(val._id)}> Update </button>
                            <button onClick={() => deleteEvent(val._id)}> Delete </button>
                        </div>
                        )
                        })}
                </FormContent>
            </FormWrap>
        </Container>

        
    )
}

export default SignUp
