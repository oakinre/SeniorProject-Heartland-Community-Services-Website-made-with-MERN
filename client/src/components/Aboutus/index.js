import React from 'react'
import { Button2 } from '../ButtonElement'
import {
Column2, 
Img, 
ImgWrap, 
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
InfoBorder
} from './AboutusElements'

const Aboutus = ({    
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    description2, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    big
}) => {
    return (
    <InfoBorder id={id}>
        <InfoContainer lightBg={lightBg}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    {/* <Column1> */}
                    <TextWrapper>
                        <TopLine >{topLine}</TopLine>
                        {/* <Heading lightText={lightText}>{headline}</Heading> */}
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <Subtitle darkText={darkText}>{description2}</Subtitle>
                        <BtnWrap>
                            <Button2 to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80} 
                            primary = {primary ? 0 : 1}
                            dark = {dark ? 0 : 1}
                            big= {big ? 0 : 1}
                            >{buttonLabel}</Button2>
                        </BtnWrap>
                    </TextWrapper>
                    {/* </Column1> */}
                    {/* <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2> */}
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </InfoBorder>
)
}

export default Aboutus
