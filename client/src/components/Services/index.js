import React from 'react'
import Icon1 from '../../images/partner.svg'
import Icon2 from '../../images/volunteer.svg'
import Icon3 from '../../images/give.svg'
import { 
    ServiceContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServicesLink1,
    ServicesLink2
    } from './ServicesElements'

const Services = () => {
    return (
        <ServiceContainer id='services'>
            <ServicesH1>Get Involved</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>Partner</ServicesH2>
                    <ServicesLink2 to= '/'>
                    <ServicesIcon src={Icon1} />
                    </ServicesLink2>
                    <ServicesP>Corporate product donations aid in our mission to provide help and hope.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Volunteer</ServicesH2>
                    <ServicesLink2 to='/auth'>
                    <ServicesIcon src={Icon2} />
                    </ServicesLink2>
                    <ServicesP>Love to help your community. Sign up for our next event.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Give</ServicesH2>
                    <ServicesLink1 href="https://pushpay.com/g/heartlandfamily" target="_blank" >
                    <ServicesIcon src={Icon3} />
                    </ServicesLink1>
                    <ServicesP>Your donations are 100% tax deductible and enable us to bring hope to our community.</ServicesP>
                    
                </ServicesCard>
            </ServicesWrapper>
        </ServiceContainer>
    )
}

export default Services
