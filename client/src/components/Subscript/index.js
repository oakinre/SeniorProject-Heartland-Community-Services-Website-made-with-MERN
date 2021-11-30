import React, {useState} from 'react'
import {
    SubContainer,
    SubItems,
    SubH1,
    SubH3,
    EmailInput,
    Subscribe,
    ArrowForward,
    ArrowRight
} from './SubscriptElements'

import { Button3 } from '../ButtonElement'

const Subscript = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
        <SubContainer>
            <SubItems>
                <SubH1>Let's Make a Difference.</SubH1>
                <SubH3>Receive updates about upcoming events and opportunities.</SubH3>
                <Subscribe>
                <EmailInput type='email' placeholder='Enter Your Email...' />
                <Button3
                primary = 'true'
                dark = 'true'
                type='submit'>
                     <ArrowForward />
                 </Button3>
                </Subscribe>
            </SubItems>
        </SubContainer>
            
        </>
    )
}

export default Subscript
