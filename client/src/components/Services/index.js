import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import Icon4 from '../../images/svg-7.svg'
import { 
    ServiceContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
    } from './ServicesElements'

const Services = () => {
    return (
        <ServiceContainer id='services'>
            <ServicesH1>Get Involved</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Stuff</ServicesH2>
                    <ServicesP>We help reduce stuff blah blah blah yada yada yada.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Make Stuff</ServicesH2>
                    <ServicesP>We help make stuff blah blah blah yada yada yada.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Write Stuff</ServicesH2>
                    <ServicesP>We help write stuff blah blah blah yada yada yada.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>ReadStuff</ServicesH2>
                    <ServicesP>We help read stuff blah blah blah yada yada yada.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServiceContainer>
    )
}

export default Services
