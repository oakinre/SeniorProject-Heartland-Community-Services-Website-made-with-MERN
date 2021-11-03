import React, {useState} from "react"
import Axios from 'axios'
import { 
Container, 
FormContent,
Icon, 
FormWrap, 
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text,
Form2
} from './SignupElements'



const SignUp = () => {
    const [volunteerName, setVolunteerName] = useState("");
    const [ages, setAges] = useState(0);

    const addToList = () => {
        Axios.post("http://localhost:3001/insert", {
            volunteerName: volunteerName,
            ages: ages,
        });
    };

    return (
        <Container>
            <FormWrap>
                <Icon to="/">HFC</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign up</FormH1>
                        {/* <Form2> */}
                            <FormLabel htmlFor='for'>Volunteer Name</FormLabel>
                            <FormInput type="text" 
                            onChange={(event) => {
                                setVolunteerName(event.target.value);
                            }} required />
                            <FormLabel htmlFor='for'>Volunteer Age</FormLabel>
                            <FormInput 
                            type="number" 
                            onChange={(event) => {
                                setAges(event.target.value);
                            }} required />
                            {/* <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required /> */}
                            <FormButton onClick={addToList} type='submit'>Add to List</FormButton>
                            <Text>Forgot password</Text>
                        {/* </Form2> */}
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

            
        
    )
}

export default SignUp
