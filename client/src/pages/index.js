import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FirstSection from '../components/FirstSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'
import {homeObjAbout} from '../components/Aboutus/Data'
import Events from '../components/Events'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle} />
            <Navbar toggle={toggle} /> 
            <FirstSection />
            <Aboutus {...homeObjAbout}/>
            <InfoSection {...homeObjOne}/>
            <Events />
            <Services />
            <Footer />
        </>
    )
}

export default Home
