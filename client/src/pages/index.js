import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FirstSection from '../components/FirstSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'
import {homeObjAbout} from '../components/Aboutus/Data'
import Events from '../components/Events'
import What from '../components/What'
import Subscript from '../components/Subscript'
const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const imgStart = false;
    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle} />
            <Navbar toggle={toggle} /> 
            <FirstSection />
            <Aboutus {...homeObjAbout}/>
            <What imgStart={imgStart}/>
            <Events />
            <Services />
            <Subscript />
            <Footer />
        </>
    )
}

export default Home
