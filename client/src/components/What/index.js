import React from 'react'
import {
    Column2,  
    VideoBg, 
    EventContainer,
    EventWrapper,
    EventRow,
    TextWrapper,
    Column1,
    EventH1,
    Img,
    } from './WhatElements'
import img from '../../images/house.svg'
import img2 from '../../images/leaf.svg'
import img3 from '../../images/clock.svg'
import img4 from '../../images/car.svg'
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
                        <Img src={img} alt='House' />
                        <TextWrapper>
                        <h1 style={{color: 'grey'}}>Healthy</h1>
                        </TextWrapper>
                        <Img src={img2} alt='Leaf' />
                        <TextWrapper>
                        <h1 style={{color: 'grey'}}>Quick</h1>
                        </TextWrapper>
                        <Img src={img3} alt='Clock' />
                        <TextWrapper>
                        <h1 style={{color: 'grey'}}>Drive Through</h1>
                        </TextWrapper>
                        <Img src={img4} alt='Car' />
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
