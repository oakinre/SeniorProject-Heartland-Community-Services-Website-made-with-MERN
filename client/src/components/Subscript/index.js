import React, {useState} from 'react'
import Axios from 'axios'
import {
    SubContainer,
    SubItems,
    SubH1,
    SubH3,
    SubH4,
    EmailInput,
    Subscribe,
    ArrowForward
} from './SubscriptElements'

import { Button3 } from '../ButtonElement'
import { set } from 'mongoose'

const Subscript = (res) => {
    
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const empty = (email) =>{
        if(email === ""){
            setErrorMessage("");
        }
    }

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return !(email === "" || regex.test(email) === false);
    }

    const addToEmailList = async(req,res) => {
        Axios.post("http://localhost:3001/insert2", {
            email: email
        }).then((response) => {
            if(response === "inserted data")
            setErrorMessage("")
        }).catch((error) => {
            if(error.response){
                setErrorMessage("Email already exists");
            }
        });
        
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = emailValidation();
        
        // Check if email is valid
        if (isEmailValid) {
            addToEmailList();
            setErrorMessage("Email Submitted Successfully")
            
        }
        else if(email === ""){
            setErrorMessage("Please Enter a Email");
        }else{
            setErrorMessage("Wrong Email Format");
        }
    }
    

    return (
        <>
        <SubContainer>
            <SubItems>
                <SubH1>Let's Make a Difference.</SubH1>
                <SubH3>Receive updates about upcoming events and opportunities.</SubH3>
                <Subscribe>
                <EmailInput
                id ="email"
                onChange={(email) => {
                    setEmail(email.target.value);
                    empty(email.target.value);
                    console.log(email.target.value);
                    }
                } 
                required 
                type='email' placeholder='Enter Your Email...' />
                <Button3
                onClick={e => onSubmit(e)}
                primary = 'true'
                dark = 'true'
                type='submit'>
                     <ArrowForward />
                 </Button3>
                <SubH4 className='error'> {errorMessage} </SubH4>
                </Subscribe>
            </SubItems>
        </SubContainer>  
        </>
    )
}

export default Subscript
