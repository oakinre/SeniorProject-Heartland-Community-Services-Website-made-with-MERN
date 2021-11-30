import React from 'react'
import {
    SubContainer,
    SubItems,
    SubH1,
    SubH3
} from './SubscriptElements'

import { Button } from '../ButtonElement'

const Subscript = () => {
    return (
        <>
        <SubContainer>
            <SubItems>
                <SubH1>Let's Make a Difference.</SubH1>
                <SubH3>Receive updates about upcoming events and opportunities.</SubH3>
                <Button>Press Me.</Button>
            </SubItems>
        </SubContainer>
            
        </>
    )
}

export default Subscript
