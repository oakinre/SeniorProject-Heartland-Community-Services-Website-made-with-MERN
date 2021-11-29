import React from 'react'
import {
    Column2, 
    FirstBg, 
    VideoBg, 
    EventContainer,
    EventWrapper,
    EventRow,
    TextWrapper,
    Column1,
    EventH1,
    } from './WhatElements'
import img from '../../images/help.svg'
import Video from '../../video/video.mp4'

const What = ({imgStart}) => {

    return (
        <EventContainer id = 'what'>
        <EventWrapper>
            <EventRow imgStart={imgStart}>
                <Column1>
                <EventH1>Food Distributions</EventH1>
                        <ul>
                        <TextWrapper>
                        <h1 style={{color: 'grey'}}>Easy</h1>
                        </TextWrapper>
                        <TextWrapper>
                        <h1 style={{color: 'grey'}}>Healthy</h1>
                        </TextWrapper>
                        <TextWrapper>
                        <h1 style={{color: 'grey'}}>Quick</h1>
                        </TextWrapper>
                        <TextWrapper>
                        <h1 style={{color: 'grey'}}>Drive Through</h1>
                        </TextWrapper>
                        </ul>
                </Column1>
                <Column2>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </Column2>
            </EventRow>
        </EventWrapper>
    </EventContainer>
            
    )
}

export default What
