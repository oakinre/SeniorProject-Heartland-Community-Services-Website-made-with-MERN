import React from 'react'
import {
InfoContainer,
InfoWrapper,
InfoRow,
TextWrapper,
TopLine,
Subtitle,
InfoBorder
} from './AboutusElements'

const Aboutus = ({    
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    darkText, 
    description,
    description2, 
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
                        {/* <BtnWrap>
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
                        </BtnWrap> */}
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
