import React from 'react'
import {
    SubContainer,
    SubItems,
    SubH1,
    SubH2
} from 'SubscriptElements'

import { Button } from '../ButtonElement'

const Subscript = () => {
    return (
        <>
        <SubContainer>
            <SubItems>
                <SubH1>
                    <SubH2>
                        <Input /><Button type='submit'/>
                    </SubH2>
                </SubH1>
            </SubItems>
        </SubContainer>
            
        </>
    )
}

export default Subscript
