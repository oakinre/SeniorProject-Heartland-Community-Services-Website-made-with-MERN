import React, {useState, useEffect} from 'react'
import {
    Column2, 
    Img,  
    EventContainer,
    EventWrapper,
    EventRow,
    TextWrapper,
    Column1,
    EventH1,
    } from './EventElements'
import img from '../../images/help.svg'
import Axios from 'axios'
import { Button5 } from '../ButtonElement'

const Events = () => {

    const [eventList, setEventList] = useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=>{
            setEventList(response.data);
        })
    }, []);
  
    return (
        <EventContainer id = 'events'>
        <EventWrapper>
            <EventRow >
                <Column1>
                <EventH1>Upcoming Events</EventH1>
                    <TextWrapper>
                {eventList.map((val, key)=> {
                        return (
                        <div key={key} className="event">
                            <br />
                            <h1 style={{color: '#6B2929'}}>{val.eventName} &nbsp;&nbsp;{val.eventDate}&nbsp;&nbsp; {val.eventTime}</h1>
                            <br />
                            <br />
                            <br />
                            
                        </div>
                        )
                        })}
                    </TextWrapper>
                    {
                    (JSON.parse(localStorage.getItem('profile'))?.result._id === '61a9266752a033cec18e6ec9')  ?
                    <Button5
                    primary = 'true'
                    dark = 'true' 
                    to='/event'>
                        Update
                    </Button5> : (null)
                }
                </Column1>
                <Column2>
                    <Img src={img} alt='Car' />
                    <h2>Have questions? Contact Us: info@heartland-community.com</h2>
                </Column2>
            </EventRow>
        </EventWrapper>
    </EventContainer>
            
    )
}

export default Events
