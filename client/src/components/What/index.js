import React from 'react'
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
    } from './WhatElements'
import img from '../../images/help.svg'

const What = () => {

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
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt='Car' />
                        <h2>Have questions? Contact Us: info@heartland-community.com</h2>
                    </ImgWrap>
                </Column2>
            </EventRow>
        </EventWrapper>
    </EventContainer>
            
    )
}

export default What
