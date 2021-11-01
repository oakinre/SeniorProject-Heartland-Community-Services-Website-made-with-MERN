import React from 'react'
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
    return (
        <Container>
            <FormWrap>
                <Icon to="/">HFC</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign up</FormH1>
                        {/* <Form2> */}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required /><FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required /><FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required /><FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        {/* </Form2> */}
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

            
        
    )
}

export default SignUp
