import React, {useState} from 'react'
import Video from '../../video/videoHCS.mp4'
import { Button } from '../ButtonElement'
import { 
FirstContainer,
FirstBg,
VideoBg,
FirstContent,
FirstH1,
FirstBtnWrap,
ArrowForward,
ArrowRight
} from './FirstElements'

const FirstSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <FirstContainer id ='home'>
            <FirstBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </FirstBg>
            <FirstContent>
                <FirstH1> Food for Hope. Essentials for Life. </FirstH1>
                <FirstBtnWrap>
                    <Button 
                        to='services' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary = 'true'
                        dark = 'true' 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-70}>
                        Get Involved {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </FirstBtnWrap>
            </FirstContent>
        </FirstContainer>
    );
};

export default FirstSection
