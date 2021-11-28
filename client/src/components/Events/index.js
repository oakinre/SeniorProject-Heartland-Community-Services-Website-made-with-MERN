import React, {useState, useEffect} from 'react'
import {
    Column2, 
    Img, 
    ImgWrap, 
    EventContainer,
    EventWrapper,
    EventRow,
    TextWrapper,
    Column1,
    EventH1,
    } from './EventElements'
import img from '../../images/svg-1.svg'
import Axios from 'axios'

const Events = () => {

    const [eventList, setEventList] = useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=>{
            setEventList(response.data);
        })
    }, []);

    return (
        <EventContainer>
        <EventWrapper>
            <EventRow >
                <Column1>
                <EventH1>Events</EventH1>
                
                    {eventList.map((val, key)=> {
                        return (
                        <div key={key} className="event"> 
                            <h1>{val.eventName}  {val.eventDate}  {val.eventTime}</h1>
                            </div>
                        )
                        })}
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt='Car' />
                    </ImgWrap>
                </Column2>
            </EventRow>
        </EventWrapper>
    </EventContainer>
            
    )
}

export default Events
